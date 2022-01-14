const billContainer = document.getElementById("billContainer");
const tipList = document.querySelectorAll('.tipC');
const peopleContainer = document.getElementById('peopleContainer')
const tipContainer = document.getElementById('tipValue');
const customTip = document.getElementById('tipI');

let billValue;
let tipValue;
let peopleValue;
let customTipValue;

billContainer.addEventListener('input', getBillValue);
function getBillValue(){
     billValue = billContainer.value
     if(billValue > 0){
          getTip();
     }
}


tipList.forEach(i => {
     i.addEventListener('click', getTipValue);
     
})
function getTipValue(e){
     tipValue = parseInt(e.target.innerText);
}

customTip.addEventListener('input', getCustomTip);
function getCustomTip(){
     customTipValue = customTip.value;
     if(customTipValue > 0 ){
          getTip2();
     }
}


peopleContainer.addEventListener('input', getPeopleValue);
function getPeopleValue(){
     peopleValue = peopleContainer.value;
     if(peopleValue >= 1){
          getTip()
     }
}


function getTip(){
     tipValue = (billValue / peopleValue) * (tipValue / 100)
     tipContainer.innerText = tipValue;
}


function getTip2(){
     tipValue = (billValue / peopleValue) * (customTipValue / 100)
     tipContainer.innerText = tipValue;
}
