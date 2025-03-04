let userName = document.getElementById("userName");
let password = document.getElementById("password");
let btnLogin = document.getElementById("btnLogin");

let getUser = localStorage.getItem("username");
let getPass = localStorage.getItem("password");
btnLogin.onclick = (e) =>{
    e.preventDefault()
    if (getUser === userName.value && getPass === password.value) {
    
    setTimeout(() =>{
        location = "index.html"
    }, 1000)
    }else{
        Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question"
          });
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