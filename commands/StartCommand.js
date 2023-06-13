const bot = require('../config/bot');
const { Markup } = require('telegraf');
require('dotenv').config();
const utils = require('../utils');
const db = require('../config/database');
const Users = () => db('users');
///translations
const translate = require('../config/translation');

//logger
const pino = require('pino');
const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});
/*
---------------------------------------------------------
This is the starting point of the bot
it handles start messages and new user welcome messages
-------------------------------------------------------
 */
bot.start(async (ctx) => {
  try {
    if (ctx.chat.type === 'private') {
      const user = await Users().where('tg_id', ctx.from.id).first();
      ///if no user exists in db
      if (!user) {
        await Users().insert({
          tg_id: ctx.from.id,
          username: ctx.from.username,
          first_name: ctx.from.first_name || null,
          last_name: ctx.from.last_name || null,
          language_code: ctx.from.language_code || null,
        });
      }

      await ctx.replyWithMarkdown(
        `${utils.replacePlaceholders(translate.t('welcome'), ctx)}`,
        Markup.keyboard([
          ['🔍 Search', '🆘 Help'],
          ['🛠 Tools', '📞 Feedback'],
          ['💰 Donate', '⭐️ Rate us', '👥 Share'],
        ]).resize()
      );

      ///inline keyboard for useful urls
      await ctx.replyWithMarkdown(
        'Here are a few urls that might help',
        Markup.inlineKeyboard([
          [Markup.button.url('👥 Group', process.env.GROUP_LINK)],
          [Markup.button.url('🗞 News', process.env.CHANNEL_LINK)],
          [Markup.button.url('💰 Donate', process.env.DONATE_LINK)],
          [Markup.button.url('➕ Add me to Group', process.env.BOT_LINK)],
        ])
      );
    } else {
      //welcome message
      await ctx.replyWithMarkdown(
        `${utils.replacePlaceholders(translate.t('welcome'), ctx)}`,
        Markup.removeKeyboard()
      );

      ///inline keyboard for useful urls
      await ctx.replyWithMarkdown(
        'Here are a few urls that might help',
        Markup.inlineKeyboard([
          [Markup.button.url('👥 Group', process.env.GROUP_LINK)],
          [Markup.button.url('🗞 News', process.env.CHANNEL_LINK)],
          [Markup.button.url('💰 Donate', process.env.DONATE_LINK)],
          [Markup.button.url('➕ Add me to Group', process.env.BOT_LINK)],
        ])
      );
    }
  } catch (e) {
    logger.error(e);
  }
});
