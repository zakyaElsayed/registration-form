var currentUrl=window.location.href;
var url = new URL(currentUrl);
var userName = url.searchParams.get("username");

document.getElementById("userLogedName").innerHTML=userName



console.log(userName)