var signupName=document.getElementById("nameInput")
var signupEmail=document.getElementById("emailInput")
var signupPassword=document.getElementById("passInput")
 
var signUpArray=[]
if(localStorage.getItem("users")!=null)
{
    signUpArray=JSON.parse(localStorage.getItem('users'))

}

function emptyInputs(){
if(signupName.value=="" || signupEmail.value=="" || signupPassword.value=="")
{ document.getElementById('requiredInputs').classList.remove('d-none')
document.getElementById('firstRegestration').classList.add('d-none')
document.getElementById('anotherRegestration').classList.add('d-none')}}

function clearForm(){
    signupName.value="";
    signupEmail.value="";
    signupPassword.value="";
    
    }
    
    
function checkInputs()
{
    var signUpInfo ={
        name:signupName.value,
        email:signupEmail.value,
        password:signupPassword.value,
    }

if(signupName.value=="" || signupEmail.value=="" || signupPassword.value=="")

{
    emptyInputs()
}
    

else{ 
    if(localStorage.getItem("users")==null)
        
{  
    signUpArray.push(signUpInfo)
    localStorage.setItem("users",JSON.stringify(signUpArray))
    clearForm()
    document.getElementById('requiredInputs').classList.add('d-none')
    document.getElementById('firstRegestration').classList.remove('d-none')
}
else{
    signUpArray=JSON.parse(localStorage.getItem('users'))
    console.log(signUpArray);


    for(var i=0;i<signUpArray.length;i++){
        if(signUpArray[i].email==signupEmail.value){
            document.getElementById('anotherRegestration').classList.remove('d-none')
            document.getElementById('firstRegestration').classList.add('d-none')
            return

        }
}

  signUpArray.push(signUpInfo)
 localStorage.setItem("users",JSON.stringify(signUpArray))
 document.getElementById('firstRegestration').classList.remove('d-none')

 document.getElementById('anotherRegestration').classList.add('d-none')




}}
}

/*

function validateInputs(){
    var regexE=/^[A-Za-Z0-9]{3,8}@(gmail|yahoo)\.com$/
    var regexP=/^[A-Za-Z0-9]{8,16}$/
   if(regexE.test(signupEmail.value)==false & regexP.test(signupPassword.value) ==false) 
{
document.getElementById('invalid').classList.remove('d-none')
}
else{
signUpArray.push(signUpInfo)}
}*/