const bot = require('../config/bot');
require('dotenv').config();
const utils = require('../utils');

/*
-----------------------------------------------
-----handle new chat member welcome messages
--------------------------------------------
 */
///translations
const translate = require('../config/translation');
bot.on('new_chat_members', async (ctx) => {
  await ctx.reply(`${utils.replacePlaceholders(translate.t('welcomeChatMember'), ctx)}`);
});
