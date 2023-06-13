function replacePlaceholders(str, ctx) {
  const search = str.match(/{{(\w+)}}/g);
  for (let w of search) {
    switch (w) {
      case '{{username}}':
        str = str.replace('{{username}}', `${ctx.from.username}`);
        break;
      case '{{group}}':
        str = str.replace('{{group}}', `${ctx.chat.title}`);
        break;
    }
  }
  return str;
}

module.exports = { replacePlaceholders };
