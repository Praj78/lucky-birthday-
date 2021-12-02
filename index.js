var dateOfBirth =document.querySelector("#date-of-birth");
var luckyNumber=document.querySelector("#lucky-number");
var checkNumberButton=document.querySelector("#check-number");
var outputBox=document.querySelector("#output-box")


function checkBirthDateIsLucky(){
    outputBox.innerHTML="";
var dob =dateOfBirth.value;
var sum =calculateSum(dob);
if(sum&&dob)
compareValues(sum,luckyNumber.value);
else
outputBox.innerHTML="Please enter both date of birth  and lucky number"
}
function calculateSum(dob){
dob=dob.replaceAll("-","");
var sum =0;
for(let i=0;i<dob.length;i++){
    sum=sum+Number(dob.charAt(i));
}
return sum;
}
function compareValues(sum,luckyNumber){
    if(Number(luckyNumber)<1){
        outputBox.innerHTML="invalid input"
        }else{
if(sum %luckyNumber===0){
    outputBox.innerHTML="Your birthday is lucky."
}else{
    outputBox.innerHTML="Your birthday is not lucky,u make ur own luck."
}
    }
}
checkNumberButton.addEventListener("click",checkBirthDateIsLucky);
