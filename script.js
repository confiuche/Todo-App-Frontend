
const myform = document.getElementById("myform")
const BASE_URL = "https://todo-app-dp2t.onrender.com/api/v1/users/"
myform.addEventListener("submit",(e)=>{
    e.preventDefault();

    //console.log(e);
    const firstname = document.getElementById("firstname").value
    const lastname = document.getElementById("lastname").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    fetch(BASE_URL+"create",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            firstname,
            lastname,
            email,
            password,
        })
    })
    .then((res)=>res.json())
    .then((data)=>{
        if(data.status == "success"){
            alert("Your account has been registered successfully")
            window.location = "/login.html"
            return;
        }
        alert(data.status)
    })
    .catch((e) => console.log("Error",e))
})