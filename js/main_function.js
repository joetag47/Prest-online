// cookie for user session
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
  	var expires = "expires="+d.toUTCString();
  	document.cookie = cname + "=" + cvalue + "; " + expires;
}

// get cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return ""; 
}

// delete cookie
function deleteCookie(cname){
   var d = 'Thu, 01 Jan 1970 00:00:00 UTC';
   var expires = "expires="+d;
   document.cookie = cname + "=;" + expires;
}

// logout function
function Logout(){

 	// delete all cookies
    deleteCookie('abbrev');
    deleteCookie('access');
    deleteCookie('address');
    deleteCookie('contact');
    deleteCookie('email');
    deleteCookie('fullname');
    deleteCookie('pharmacy');
    deleteCookie('token');

    // goto login page
	window.location.replace("index.html");

} 