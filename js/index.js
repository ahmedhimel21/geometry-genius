// card one Dom manipulation
document.getElementById('btn-card-1').addEventListener("click",function(){
  serial+=1;
  const input1Value = firstInputFieldValue('first-input-field')
  const input2Value = secondInputFieldValue('second-input-field')
  const geometryOperationDecimal = 0.5*input1Value*input2Value;
  const geometryOperation = geometryOperationDecimal.toFixed(2);
  const geometryType = document.getElementById('geometry1-type').innerText; 
  displayData(geometryType, geometryOperation);
})

// card two Dom manipulation
document.getElementById('btn-card-2').addEventListener("click",function(){
  serial+=1;
  const input1Value = firstInputFieldValue('first-input2-field')
  const input2Value = secondInputFieldValue('second-input2-field')
  const geometryOperationDecimal = input1Value*input2Value;
  const geometryOperation = geometryOperationDecimal.toFixed(2);
  const geometryType = document.getElementById('geometry2-type').innerText;
  displayData(geometryType, geometryOperation);
})

// card three Dom manipulation
document.getElementById('btn-card-3').addEventListener("click",function(){
  serial+=1;
  const input1Value = firstInputFieldValue('first-input3-field')
  const input2Value = secondInputFieldValue('second-input3-field')
  const geometryOperationDecimal = input1Value*input2Value;
  const geometryOperation = geometryOperationDecimal.toFixed(2);
  const geometryType = document.getElementById('geometry3-type').innerText;
  displayData(geometryType, geometryOperation);
})

// card fourth Dom manipulation
document.getElementById('btn-card-4').addEventListener("click",function(){
  serial+=1;
  const input1Value = firstInputFieldValue('first-input4-field')
  const input2Value = secondInputFieldValue('second-input4-field')
  const geometryOperationDecimal = input1Value*input2Value;
  const geometryOperation = geometryOperationDecimal.toFixed(2);
  const geometryType = document.getElementById('geometry4-type').innerText;
  displayData(geometryType, geometryOperation);
})

// card fifth Dom manipulation
document.getElementById('btn-card-5').addEventListener("click",function(){
  serial+=1;
  const input1Value = firstInputFieldValue('first-input5-field')
  const input2Value = secondInputFieldValue('second-input5-field')
  const geometryOperationDecimal = 0.5*input1Value*input2Value;
  const geometryOperation = geometryOperationDecimal.toFixed(2);
  const geometryType = document.getElementById('geometry5-type').innerText;
  displayData(geometryType, geometryOperation);
})

// last card Dom manipulation
document.getElementById('btn-card-6').addEventListener("click",function(){
  serial+=1;
  const input1Value = firstInputFieldValue('first-input6-field')
  const input2Value = secondInputFieldValue('second-input6-field')
  const geometryOperationDecimal = 3.14*input1Value*input2Value;
  const geometryOperation = geometryOperationDecimal.toFixed(2); 
  const geometryType = document.getElementById('geometry6-type').innerText;
  displayData(geometryType, geometryOperation);
})
