const billContainer = document.getElementById("billContainer");
const tipList = document.querySelectorAll('.tipC');
const peopleContainer = document.getElementById('peopleContainer')
const tipContainer = document.getElementById('tipValue');
const customTip = document.getElementById('tipI');
const totalBill = document.getElementById('totalBill');
const resetBtn = document.getElementById('idReset');

let billValue, tipValue, finalTipValue, peopleValue, customTipValue, finalBill;


billContainer.addEventListener('input', getBillValue);
function getBillValue(){
     billValue = parseFloat(billContainer.value);
     if(tipValue > 0 && peopleValue > 0 && billValue > 0){
          getTip();
     }
}

tipList.forEach(i => {
     i.addEventListener('click', getTipValue);
     
})
function getTipValue(e){
     tipList.forEach(i => {
          i.classList.remove('on')
          if(e.target.classList.innerText == i.classList.innerText){
               e.target.classList.add('on');
               tipValue = parseInt(e.target.innerText)
               tipValue = parseFloat(tipValue / 100);
          }
     })
     if(tipValue > 0 && peopleValue > 0 && billValue > 0){
          getTip();
     }else{
          totalBill.innerText = "$00.0";
          tipContainer.innerText = "$00.0";
     }

     customTip.value = '';
}



customTip.addEventListener('input', getCustomTip);
function getCustomTip(){
     customTipValue = customTip.value / 100;
     parseFloat(customTipValue);
     getTip2();
}


peopleContainer.addEventListener('input', getPeopleValue);
function getPeopleValue(){
     peopleValue = peopleContainer.value;
     if(tipValue > 0 && peopleValue > 0 && billValue > 0 && customTipValue !== 0){
          getTip();
     }else if(customTipValue > 0){
          getTip2();
     }else{
          getTip();
     }
}


function getTip(){
     finalTipValue = (billValue / peopleValue) * tipValue
     finalBill = (billValue / peopleValue) + finalTipValue; 
     tipContainer.innerText = parseFloat(finalTipValue).toFixed(2);
     totalBill.innerText = parseFloat(finalBill).toFixed(2);
}


function getTip2(){
     tipList.forEach(i => {
          i.classList.remove('on');
     })

     console.log(billValue, customTipValue, peopleValue);
     finalTipValue = (billValue / peopleValue) * customTipValue;
     finalBill = (billValue / peopleValue) + finalTipValue; 
     tipContainer.innerText = parseFloat(finalTipValue).toFixed(2);
     totalBill.innerText = parseFloat(finalBill).toFixed(2);
     
}


idReset.addEventListener('click', resetAll);

function resetAll(){
     billValue = 0;
     peopleValue = 0;
     finalTipValue = 0;
     billContainer.value = '';
     tipContainer.value = '';
     peopleContainer.value = '';
     customTip.value = '';
     totalBill.innerText = "$00.0";
     tipContainer.innerText = "$00.0";
}