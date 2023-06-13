const start = require('./StartCommand');
const newChatMember = require('./NewMemberCommand');
const leaveChat = require('./LeftChatMember');
const commands = {
  start,
  newChatMember,
  leaveChat,
};

module.exports = commands;
