const bot = require('../config/bot');
const { Markup } = require('telegraf');
///translations
const translate = require('../config/translation');

bot.start(async (ctx) => {
  await ctx.replyWithMarkdown(
    `${translate.t('welcome')}`,
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
      Markup.button.url('Group', 'https://www.i18next.com/principles/namespaces'),
      Markup.button.url('Donate', 'https://www.i18next.com/principles/namespaces'),
    ])
  );
});
