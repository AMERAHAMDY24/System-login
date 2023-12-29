var signinEmail=document.getElementById("emailInput")
var signinPass=document.getElementById("passInput")
var signinArr=[]
var signinName=""

function checkInputs(){

if(emailInput.value=="" || passInput.value=="")
{
    document.getElementById("wrongLogin").classList.remove("d-none")
}
else{


    if(localStorage.getItem("users")!=null)
{
    signinArr=JSON.parse(localStorage.getItem('users'))
console.log(signinArr)
    for(var i=0;i<signinArr.length;i++){
        if(signinArr[i].email==signinEmail.value& signinArr[i].password==signinPass.value){
           localStorage.setItem("userName",JSON.stringify(signinArr[i].name))
           localStorage.getItem("userName", JSON.stringify(signinArr[i].name))
            window.location.href = "home.html"
            document.getElementById("userName").innerHTML+=userName

        }
}

    document.getElementById("wrongEmail").classList.remove("d-none")
    document.getElementById("wrongLogin").classList.add("d-none")
    
} 


}}
