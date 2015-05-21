var Marty = require('marty');

var DataAPI = Marty.createStateSource({
  type: 'http',
  id: 'DataAPI',
  pushData: function (data) {
    this.post({ url: 'https://api.leancloud.cn/1.1/classes/data',
                body: data })
        .then(function (res) {
          	console.log(res + ' is pushed ')
        });
  }
});

/**
 * Leancloud App ID and KEY
 */
Marty.HttpStateSource.addHook({
    before(req) {
        req.headers['X-AVOSCloud-Application-Id'] = 'wwjcv522yc0iyzwobndcf3gtb7ld0onxo5fgfvs7aki859gb';
        req.headers['X-AVOSCloud-Application-Key'] = 'orxwr0ina1cdx2e0l2izx8474fw9ytbzth5gnm0aa9qpjpyi';
        req.headers['Content-Type'] = 'application/json';
    }
});

module.exports = DataAPI;
