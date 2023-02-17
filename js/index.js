// card one Dom manipulation
document.getElementById('btn-card-1').addEventListener("click",function(){
  serial+=1;
  const input1Value = firstInputFieldValue('first-input-field')
  const input2Value = secondInputFieldValue('second-input-field')
  const geometryOperation = 0.5*input1Value*input2Value;
  const geometryType = document.getElementById('geometry1-type').innerText;
  displayData(geometryType, geometryOperation);
})


