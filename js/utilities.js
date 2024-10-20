let serial = 0;
// get first input value function
function firstInputFieldValue(firstInputFieldId){
  const firstInputField = document.getElementById(firstInputFieldId);
  const firstInputString = firstInputField.value;
  const firstInputValue = parseFloat(firstInputString) 
  firstInputField.value = '';
  return firstInputValue;  
}
// get second input value function
function secondInputFieldValue(secondInputFieldId){
  const secondInputField = document.getElementById(secondInputFieldId);
  const secondInputString = secondInputField.value;
  const secondInputValue = parseFloat(secondInputString);
  secondInputField.value = '';
  return secondInputValue;
}

// display data function
function displayData(geometryType, geometryOperation) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${geometryType}</td>
    <td>${geometryOperation} cm<sup>2</sup></td>
    <td>
    <button class="btn btn-sm text-white btn-info">Convert to m<sup>2</sum></button>
    </td>
    
  `;
  container.appendChild(tr);
  
}

// random bg change onmouseover function
function randColor(id){
  const element = document.getElementById(id);
  let bgColor = "#" + Math.random().toString(16).slice(2,8);
  element.style.backgroundColor = bgColor;
}




