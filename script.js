'use strick';
//element
const billInputEl = document.getElementById('bill');
const personInputEl = document.getElementById('people');

//event listner
const tipInputEl = document.querySelectorAll('.tip-percent');
const customTipEl = document.getElementById('custom-tip');
const btnResetEl = document.getElementById('btn-reset');


//

const amountEl = document.getElementById('amount');
const totalEl = document.getElementById('total');

// variables
let person, bill, tipPercent

person = 0;
bill = 0;
tipPercent = 0;
//zero
amountEl.innerText = '$0.00';
totalEl.innerText = '$0.00';
//null
personInputEl.value = null;
billInputEl.value = null;
customTipEl.value = null;

// function

function  init(){
    person = 0;
    bill = 0;
    tipPercent = 0;
    //zero
    amountEl.innerText = '$0.00';
    totalEl.innerText = '$0.00';
    //null
    personInputEl.value = null;
    billInputEl.value = null;
    customTipEl.value = null;
}
//2nd
function calculateBill(){
    
    person = Number(personInputEl.value);
    bill = Number(billInputEl.value);
    

    const totalTip = bill * tipPercent;
    const totalBill = bill + totalTip;
    const tipPerPerson = totalTip / person;
    const billPerPerson = totalBill / person;
    
    amountEl.innerText = '$' + tipPerPerson.toFixed(2);
    totalEl.innerText = '$' + billPerPerson.toFixed(2);

    personInputEl.value = null;
    billInputEl.value = null;



}


//eventlistner



for(let i = 0; i < tipInputEl.length; i++){
    tipInputEl[i].addEventListener('click', function (){
        
    tipPercent = Number(this.value) /100;
        calculateBill(tipPercent);

    });
}

customTipEl.addEventListener('change',function(){
    
    tipPercent = Number(this.value) /100;
    calculateBill(tipPercent);
});

btnResetEl.addEventListener('click', function(){
    init();

});
// init function
init();
