let list = document.getElementById("list");
let bar = document.getElementById("bar");
bar.onclick = () =>{
    if (bar.checked) {
        list.style.display ="flex"
    }else{
        list.style.display ="none"
    }
};

// ////////////

let logOut = document.getElementById("logOut");
logOut.onclick = () =>{

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            });
            localStorage.clear();
            window.location = "register.html";
    
        }
    });
}
// //////////////
let scrol = document.querySelector(".scrol");
window.onscroll = () =>{
    if (scrollY > 300) {
        scrol.style.opacity = "1"
    }else{
        scrol.style.opacity = "0"

    }
}
scrol.onclick = function(){
    scroll({
    top:0,
    left:0,
    behavior:'smooth',
    })
};


