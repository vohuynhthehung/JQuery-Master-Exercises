document.addEventListener("DOMContentLoaded", function(event) {
    /*** JS Cookie ***/
    document.getElementById("submit").addEventListener("click", function(e) {
        var firstName = document.getElementById("firstname").value;
        var lastName = document.getElementById("lastname").value;

        if (firstName != "") {
            createCookie("firstname", firstName);
        }
        if (lastName != "") {
            createCookie("lastname", lastName);
        }
    });

    function createCookie(name, value, days) {
        var expires = "";

        if (isFinite(days) == true) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + escape(value) + expires;
    }

    function getCookie(name) {
        var cookies = document.cookie;
        var result = null;
        if (cookies.length > 0) {
            var arrCookies = cookies.split(";");
            var patt = new RegExp(name);
            for (var i = 0; i < arrCookies.length; i++) {
                if (patt.test(arrCookies[i]) == true) {
                    result = unescape(arrCookies[i].slice(arrCookies[i].indexOf("=") + 1));
                    break;
                }
            }
        }
        return result;
    }

    var firstNameV = getCookie("firstname");
    var lastNameV = getCookie("lastname");
    if (firstNameV != null) {
        document.getElementById("firstname").value = firstNameV;
    }
    if (lastNameV != null) {
        document.getElementById("lastname").value = lastNameV;
    }


    var cName = getCookie("name");
    if (cName != null) {
        alert("Xin chào " + cName);
    } else {
        var name = prompt("Xin vui lòng nhập vào tên của bạn!");
        if (name != null && name != "") {
            createCookie("name", name);
        }
    }

    var cValue = getCookie("counter");

    if (cValue == null) {
        cValue = 1
    } else {
        cValue = Number(cValue) + 1;
    }

    createCookie("counter", cValue);
    document.getElementById("result").innerHTML = cValue;

    /*** JS History ***/
    function back() {
        history.back();
    }

    function next() {
        history.forward();
    }

    function go() {
        var value = document.getElementById("link-go").value;
        if (value != "") {
            history.go(value);
        } else {
            alert("Dữ liệu không được rỗng");
        }
    }

    Math.easeInOutQuad = function(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    function scrollTo(element, to, duration) {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        var animateScroll = function() {
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            console.log(val);
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }
    document.getElementById('scroll_control').addEventListener("click", function(e) {
        if (e.target && e.target.nodeName == "A") {
            var target = e.target.getAttribute("href").replace('#', ''),
                $target = document.getElementById(target);
            if ($target != null) {
                var to = $target.offsetTop;
                scrollTo(document.body, to, 1000);
            }
        }
    });
});
