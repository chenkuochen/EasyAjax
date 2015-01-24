var easyAjax = (function(){
    function init(config){
        easyAjax(config.method, config.url, config.params, config.success, config.failure);
    }
    function easyAjax(method, url, params, success, failure){ //only deal with json
        var httpRequest;
        if (window.XMLHttpRequest){
            httpRequest = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            try {
                    httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (exception) {
                try {
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (exception2) {}
            }
        }
        if (!httpRequest) {
            return false;
        }
        httpRequest.onreadystatechange = function(){
            try {
                if (4 === httpRequest.readyState) {
                    if (200 === httpRequest.status && success) {
                        success(httpRequest.status, JSON.parse(httpRequest.responseText));
                    } else if (failure) {
                        failure(httpRequest.status, JSON.parse(httpRequest.responseText));
                    }
                }
            } catch (exception) {}
        };
        if ('POST' === method) {
            httpRequest.open(method, url);
            httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            httpRequest.send(JSON.stringify(params));
        } else if ('GET' === method) {
            var getParams = "?";
            for (var key in params) {
                getParams += key + '=' + params[key] + '&';
            }
            httpRequest.open(method, url + getParams.substring(0, getParams.length - 1));
            httpRequest.send();
        } else {
            httpRequest.open(method, url);
            httpRequest.send();
        }
    }
    return {
        ajax : init
    };
}());
