var welcomName="";


/* signup section */
var userNameSignUp = document.getElementById("userNameSignUp");
var userEmailSignUp = document.getElementById("userEmailSignUp");
var userPassSignUp = document.getElementById("userPassSignUp");
var signUpBtn = document.getElementById("signUpBtn");
console.log(signUpBtn);
 users = JSON.parse(localStorage.getItem("users"));





var userNameRegex = /^[A-Za-z][A-Za-z0-9_ \s]{2,29}$/;
var userEmailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
var userPassRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{4,})/;

userNameSignUp.addEventListener("keyup",function (){
    if (userNameRegex.test(userNameSignUp.value)){

        document.querySelector("#userNameValidation").innerHTML=""
       // signUpBtn.classList.remove("disabled")
    }
    else {
        document.querySelector("#userNameValidation").innerHTML="invalid user name please enter your name 3-29 char"
       // signUpBtn.classList.add("disabled")
    }
})
userEmailSignUp.addEventListener("keyup",function (){
    if (userEmailRegex.test(userEmailSignUp.value)){

        document.querySelector("#userEmailValidation").innerHTML=""
       // signUpBtn.classList.remove("disabled")
    }
    else {
        document.querySelector("#userEmailValidation").innerHTML="invalid Email please enter your email ex:yourmail@gmail.com "
       // signUpBtn.classList.add("disabled")
    }
})
userPassSignUp.addEventListener("keyup",function (){
    if (userPassRegex.test(userPassSignUp.value)){

        document.querySelector("#userPassValidation").innerHTML=""
       // signUpBtn.classList.remove("disabled")
    }
    else {
        document.querySelector("#userPassValidation").innerHTML="invalid Password please enter password contain at least 3char and number"
       // signUpBtn.classList.add("disabled")
    }
})
function userNameSignUpValid() {
   
    if (userNameRegex.test(userNameSignUp.value)) {
      
        userNameSignUp.classList.add("is-invalid");
        return true;
    }
    else {
       
        userNameSignUp.classList.add("is-invalid");
        return false;
    }
}

function userEmailSignUpValid() {

    if ( users==undefined){
        users=[];
        localStorage.setItem("users",JSON.stringify(users));
return true;
    }
    else {
    for (var i=0;i<users.length;i++){
        if (users[i].email==userEmailSignUp.value){
          document.getElementById("userEmailValidation").innerHTML= "already exist"
            return false;
        }
    }
    if (userEmailRegex.test(userEmailSignUp.value)) {
       
        return true;
    }
    else {
       
        return false;
    }

    }

}
function userPassSignUpValid() {
    
    if (userPassRegex.test(userPassSignUp.value)) {
       
        return true;
    }
    else {
       
        return false;
    }
}
signUpBtn.addEventListener("click", addUser);
function addUser() {
   
   
   
    users = JSON.parse(localStorage.getItem("users"));
    var user = {
        name: userNameSignUp.value,
        email: userEmailSignUp.value,
        pass: userPassSignUp.value,
    }
    if (userNameSignUpValid()&&userEmailSignUpValid()&&userPassSignUpValid()){
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    welcomName=userNameSignUp.value;
    document.location.href="file:///D:/fullstackDiploma/frontEnd/session10/assigment4js/welcomePage.html?username="+welcomName;
  
    }
    else {

       window.alert(" please enter valid user data")
    }
}


//----------------------------End of signup section---------------------------------------------------

//-----------------start of log in section ------------------------------------










