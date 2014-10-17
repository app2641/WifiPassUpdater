var webdriverio = require('webdriverio'),
    config      = require('../data/config.json');

var options = {
  host: 'localhost',
  port: 4444
};


var client = webdriverio.remote(options).init();
var url = 'http://'+config.user+':'+config.pass+'@'+config.url;
client.url(url);

client.frame('statusframe', function (error, res) {
    console.log(error, res);
})
.click('div[id="t1"]', function (error) {

    // 新しいパスワードを設定して確定処理を行う
    client.setValue('input[name="wl_wpa_psk"]', config.wifi_pass, function (error) {
        client.click('input[id="applySecurity"]');
    });
});

client.end();

