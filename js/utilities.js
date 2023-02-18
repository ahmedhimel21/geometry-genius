let serial = 0;
function firstInputFieldValue(firstInputFieldId){
  const firstInputField = document.getElementById(firstInputFieldId);
  const firstInputString = firstInputField.value;
  const firstInputValue = parseFloat(firstInputString) 
  firstInputField.value = '';
  return firstInputValue;  
}

function secondInputFieldValue(secondInputFieldId){
  const secondInputField = document.getElementById(secondInputFieldId);
  const secondInputString = secondInputField.value;
  const secondInputValue = parseFloat(secondInputString);
  secondInputField.value = '';
  return secondInputValue;
}


function displayData(geometryType, geometryOperation) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${geometryType}</td>
    <td>${geometryOperation}</td>
    <td>cm<sup>2</sup></td>
    <td>
    <button class="btn btn-sm text-white btn-info">Convert to m<sup>2</sum></button>
    </td>
    
  `;
  container.appendChild(tr);
  
}

// random bg change onmouseover
function rg(m,n){
  return Math.floor(Math.random()*(n-m+1))+m;
}
function hex(i){
  return i.toString(16);
}
function randColor(){
  return '#' + hex(rg(1,15))+hex(rg(1,15))+hex(rg(1,15))+hex(rg(1,15))+hex(rg(1,15))+hex(rg(1,15));
}

$(".subContent").mouseover(function(){
  $(this).css("background-color", randColor())
});




