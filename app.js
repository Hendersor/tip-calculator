const billContainer = document.getElementById("billContainer");
const tipList = document.querySelectorAll('.tipC');
const peopleContainer = document.getElementById('peopleContainer')

let billValue = 0;
let tipValue = 0;
let peopleValue = 0;

billContainer.addEventListener('input', getBillValue);

function getBillValue(){
     billValue = billContainer.value
}

tipList.forEach(i => {
     i.addEventListener('click', getTipValue);
})

function getTipValue(e){
     tipValue = parseInt(e.target.innerText);
}


peopleContainer.addEventListener('input', getPeopleValue);

function getPeopleValue(){
     peopleValue = peopleContainer.value;
     console.log(peopleValue)
}