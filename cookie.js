
    window.onload = function () {
        document.getElementById('cookie-popup').style.display = 'flex';
    };

    function acceptCookies() {
        // You could set this in localStorage if needed
        console.log("Cookies accepted");
        document.getElementById('cookie-popup').style.display = 'none';
    }

    function declineCookies() {
        // You could disable analytics or tracking here
        console.log("Cookies declined");
        document.getElementById('cookie-popup').style.display = 'none';
    }
