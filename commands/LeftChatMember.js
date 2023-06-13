const bot = require('../config/bot');
const { Markup } = require('telegraf');
require('dotenv').config();
const utils = require('../utils');

///translations
const translate = require('../config/translation');
bot.on('left_chat_member', async (ctx) => {
  await ctx.reply(`So long ${ctx.from.username} 🫡`);
});
