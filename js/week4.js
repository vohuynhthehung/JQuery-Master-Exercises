document.addEventListener("DOMContentLoaded", function(event) {
    function detectBrowser() {
        var userAgent = navigator.userAgent;
        var browser = {
            "Chrome": "Google Chrome",
            "MSIE": "Internet Explorer",
            "Firefox": "Firefox",
            "Safari": "Safari",
            "Opera": "Opera"
        };
        for (x in browser) {
            var patt = new RegExp(x, "igm");
            if (patt.test(userAgent) == true) {
                return browser[x];
                break;
            }
        }
    }

    function checkPlugin(pluginName) {
        var isExist = false;
        var listPlugins = navigator.plugins;
        var patt = new RegExp(pluginName, "igm");
        for (x in listPlugins) {
            if (patt.test(listPlugins[x].name) == true) {
                isExist = true;
                break;
            }
        }
        return isExist;
    }
    var ex1 = document.getElementById("ex1");
    ex1.innerHTML = '<h3>Trình duyệt bạn đang dùng là:</h3><h1 class="text-color red">' + detectBrowser() + '</h1>';

    var language = navigator.language || navigator.systemLanguage;
    var result = language.slice(0, 2);
    var ex2 = document.getElementById("ex2");
    switch (result) {
        case 'en':
            {
                result = 'English';
                break;
            }
        case 'vn':
            {
                result = 'Vietnamese'
                break;
            }
        default:
            result;
            break;
    }
    ex2.innerHTML = '<h3>Ngôn ngữ được thiết lập bởi trình duyệt là:</h3><h1 class="text-color red">' + result;

    var ex3 = document.getElementById("ex3");
    var flag = checkPlugin("shockwave flash");
    var shockwave;
    if (flag == true) {
        shockwave = "Tìm thấy";
    } else {
        shockwave = "Không tìm thấy";
    }
    ex3.innerHTML = '<h3>Bạn đã cài đặt plugin "Shockwave Flash"?:</h3><h1 class="text-color red">' + shockwave + '</h1>';
})
