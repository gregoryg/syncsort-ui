var syncsort_api_url = "http://lemoncheeks:3000/dtl";

function sendDtlApi(cmd, successCallback, errorCallBack) {
    cmd = (typeof cmd == "undefined") ? "getzones" : cmd;
    successCallback = (typeof successCallback == "undefined") ? function() {} : successCallback;
    errorCallback = (typeof errorCallback == "undefined") ? function() {} : errorCallback;

    $.getJSON(moodseer_api_url,
	      "cmd=" + cmd + "&garbage=whatever",
	      successCallback);
}

$(document).ready(function() {
    
}
