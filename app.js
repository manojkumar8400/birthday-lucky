var dateOfBirth = document.querySelector("#D-O-B");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-number");
var outputBox = document.querySelector("#output-box");

function checkBirthdayDateIsLucky(){
    var dob=dateOfBirth.value;
    var sum=calculateSum(dob);
    comparevalues(sum,luckyNumber.value)
};

function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let i=0; i<dob.length;i++){
        sum=sum+Number(dob.charAt(i));
    };
    return sum;
};

function comparevalues(sum,luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerText=("your Birthday is lucky")
    }else{
        outputBox.innerText=("Your birthday is not lucky")
    };
};


checkButton.addEventListener("click",checkBirthdayDateIsLucky);