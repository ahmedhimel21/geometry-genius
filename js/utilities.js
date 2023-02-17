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
    <td>
    <button class="btn btn-sm btn-info">Convert to m^2</button>
    </td>
    
  `;
  container.appendChild(tr);
}