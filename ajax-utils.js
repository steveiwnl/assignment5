(function (global) {

var ajaxUtils = {};

ajaxUtils.sendGetRequest = function(requestUrl, responseHandler) {

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {

if (xhr.readyState === 4 && xhr.status === 200) {
responseHandler(JSON.parse(xhr.responseText));
}

};

xhr.open("GET", requestUrl, true);
xhr.send(null);

};

global.$ajaxUtils = ajaxUtils;

})(window);
