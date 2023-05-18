const { Telegraf } = require('telegraf');
require('dotenv').config();
const token = process.env.BOT_TOKEN;
if (!token) throw new Error('Bot token not defined in .env');
const bot = new Telegraf(process.env.BOT_TOKEN);
module.exports = bot;
