const i18next = require('i18next');
const Backend = require('i18next-fs-backend');

i18next.use(Backend).init({
  initImmediate: false,
  lng: 'en',
  fallbackLng: 'en',
  ns: ['en'],
  defaultNS: 'en',
  backend: {
    loadPath: 'locales/{{lng}}/{{ns}}.json',
  },
  //debug: true,
});

module.exports = i18next;
