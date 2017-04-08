/// <reference path="qrcode/qrcode.min.js" />
function getActiveTab(callback) {
  var queryAttributes = {
    active: true,
    currentWindow: true
  };
  chrome.tabs.query(queryAttributes, function (tabs) {
    var tab = tabs[0];
    var url = tab.url;
    callback(url);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  getActiveTab(function (url) {
    var qrcode = new QRCode(document.getElementById("qrCode"), {
      width: 140,
      height: 140
    });
    qrcode.makeCode(url);
    document.getElementById('link').innerHTML = url;
  });
});