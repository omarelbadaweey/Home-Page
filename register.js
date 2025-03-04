let userName = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnRegister = document.getElementById("btnRegister");

btnRegister.onclick = (e) =>{
    e.preventDefault()
    if (userName.value =="" || email.value =="" || password.value =="" ) {
        Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question"
          });
    }else{
        localStorage.setItem("username" , userName.value);
        localStorage.setItem("email" , email.value);
        localStorage.setItem("password" , password.value);
        // ////////////
        setTimeout(()=>{
            location = "login.html"
        },1000)
    }
}

// ////////////////
let showPass = document.getElementById("show");
showPass.onclick = () =>{
    if (showPass.checked) {
        password.type = "text"
    }else{
        password.type = "password"
    }
}