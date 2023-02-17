// card one Dom manipulation
document.getElementById('btn-card-1').addEventListener("click",function(){
  serial+=1;
  const input1Value = firstInputFieldValue('first-input-field')
  const input2Value = secondInputFieldValue('second-input-field')
  const geometryOperation = 0.5*input1Value*input2Value;
  const geometryType = document.getElementById('geometry1-type').innerText;
  displayData(geometryType, geometryOperation);
})

// card two Dom manipulation
document.getElementById('btn-card-2').addEventListener("click",function(){
  serial+=1;
  const input1Value = firstInputFieldValue('first-input2-field')
  const input2Value = secondInputFieldValue('second-input2-field')
  const geometryOperation = input1Value*input2Value;
  const geometryType = document.getElementById('geometry2-type').innerText;
  displayData(geometryType, geometryOperation);
})

// card three Dom manipulation
document.getElementById('btn-card-3').addEventListener("click",function(){
  serial+=1;
  const input1Value = firstInputFieldValue('first-input3-field')
  const input2Value = secondInputFieldValue('second-input3-field')
  const geometryOperation = input1Value*input2Value;
  const geometryType = document.getElementById('geometry3-type').innerText;
  displayData(geometryType, geometryOperation);
})
