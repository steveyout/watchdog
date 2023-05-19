const bot = require('../config/bot');
const { Markup } = require('telegraf');
require('dotenv').config();
const utils = require('../functions');
///translations
const translate = require('../config/translation');

bot.start(async (ctx) => {
  await ctx.replyWithMarkdown(
    `${utils.replacePlaceholders(translate.t('welcome'), ctx)}`,
    Markup.keyboard([
      ['🔍 Search', '🆘 Help'],
      ['🛠 Tools', '📞 Feedback'],
      ['💰 Donate', '⭐️ Rate us', '👥 Share'],
    ]).resize()
  );

  ///inline keyboard
  await ctx.replyWithMarkdown(
    'Here are a few urls that might help',
    Markup.inlineKeyboard([
      [Markup.button.url('Group', process.env.GROUP_LINK)],
      [Markup.button.url('Donate', process.env.GROUP_LINK)],
      [Markup.button.url('Add me to Group', process.env.BOT_LINK)],
    ])
  );
});
