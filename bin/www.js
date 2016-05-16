/**
 * Created by Administrator on 2016-5-16.
 */
require("babel-register");
var app = require('../server');

app.listen(app.get('port'), function() {
  console.log('Listening at http://127.0.0.1:' + app.get('port'));
});