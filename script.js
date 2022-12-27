const dateOfBirth = document.querySelector
("#date-of-birth");

const luckyNumber = document.querySelector
("#lucky-number");

const checkNumberButton = document.querySelector
("#check-number");

const outputBox = 
document.querySelector("#output-box");


function compareValue(sum,luckyNumber)
{
    if (luckyNumber == 0 || luckyNumber <0 || luckyNumber == " "){
        outputBox.innerText = "please enter valid lucky number";
    } else {
    if(sum%luckyNumber==0) {
        outputBox.innerText="your birthday is lucky 🥳";
    }else {
        outputBox.innerText="your birthday is not lucky";

    }}
}

function checkBirthDteIsLucky(){
    const dob =dateOfBirth.value;
    const sum =calculateSum(dob);
    compareValue(sum,luckyNumber.value)
}

function calculateSum(dob) {
dob= dob.replaceAll("-","");
let sum =0;
for(let index=0;index<dob.length;
    index++){
        sum = sum + Number(dob.charAt
            (index));
    }
    return sum;
}

checkNumberButton.addEventListener('click' ,checkBirthDteIsLucky)
