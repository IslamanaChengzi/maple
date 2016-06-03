import http from "http";
import request from "request";

export function getLanguage(ip, callback) {
  ip = ip.split(':');
  ip = ip[ip.length-1];
  request('http://ip.taobao.com/service/getIpInfo.php?ip='+ip, function(err, res, body) {
    let b =JSON.parse(body);
    if(b.code == 0) {
      let country = b.data.country_id;
      switch(country) {
        case "CN" :
          //console.log(country);
          callback(country);
          break;
        default :
          //console.log(country);
          callback('en');
          break;
      }
    }
  });
  //var options = {
  //  hostname: '127.0.0.1',
  //  port: 19999,
  //  path: 'http://ip.taobao.com/service/getIpInfo.php?ip='+ip,
  //  method: 'GET'
  //};
  //
  //  http.request(options, function(res) {
  //    console.log(res);
  //  });
}