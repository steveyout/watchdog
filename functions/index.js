function replacePlaceholders(str, ctx) {
  const search = str.match(/{{(\w+)}}/g);
  for (let w of search) {
    switch (w) {
      case '{{username}}':
        str = str.replace('{{username}}', `${ctx.from.username}`);
        break;
    }
  }
  return str;
}

module.exports = { replacePlaceholders };
