const dateOfBirth =document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkNumberButton=document.querySelector("#check-number");
const outputBox=document.querySelector("#output-box")
checkNumberButton.addEventListener("click",checkBirthDateIsLucky);

function checkBirthDateIsLucky(){
const dob =dateOfBirth.value;
const sum =calculateSum(dob);
if(sum&&dob)
compareValues(sum,luckyNumber.value);
else
outputBox.innerText="Please enter both date of birth  and lucky number"
}
function calculateSum(dob){
dob=dob.replaceAll("-","");
let sum =0;
for(let i=0;i<dob.length;i++){
    sum=sum+Number(dob.charAt(i));
}
return sum;
}
function compareValues(sum,luckyNumber){
    if(luckyNumber>1){
if(sum %luckyNumber===0){
    outputBox.innerText=("Your birthday is lucky.")
}else{
    outputBox.innerText=("Your birthday is not lucky,u make ur own luck.")
}
    }
}
