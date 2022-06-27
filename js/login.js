

var users=[{name:"admin",pass:"0000"}];
var userLoginName = document.getElementById("userLoginName");
var userLoginPass = document.getElementById("userLoginPass");
var loginBtn = document.getElementById("loginBtn");
 users = JSON.parse(localStorage.getItem("users"));

var welcomName = "";
//userLoginName.addEventListener("keyup",actualUser)

loginBtn.addEventListener("click", login);
function login() {
    if (actualUser()) {
      
        document.location.href = "file:///D:/fullstackDiploma/frontEnd/session10/assigment4js/welcomePage.html?username=" + welcomName;

    }
}
function actualUser() {
    if ( users==undefined){
        users=[];
        localStorage.setItem("users",JSON.stringify(users));
//return false;
    }
    var result = false;
    var rightName = false;
    var rightPass = false;
    for (var i = 0; i < users.length; i++) {



        if (users[i].name == userLoginName.value || users[i].email == userLoginName.value) {
           welcomName=users[i].name;
            rightName = true;

        }

        if (users[i].pass == userLoginPass.value) {
            rightPass = true;



        }

    }
    if (!rightName) {
        document.getElementById("userNameLoginMessage").innerHTML = "incorrect user name/email"

       

    }
    else {
        document.getElementById("userNameLoginMessage").innerHTML = ""

    }
    if (!rightPass) {
        document.getElementById("userPassLoginMessage").innerHTML = "wrong password"

        console.log("not right name ")

    }
    else {
        document.getElementById("userPassLoginMessage").innerHTML = ""

    }
    result = rightName & rightPass;


    return result;
}
