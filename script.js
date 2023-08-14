let inputValue = "0";

function appendToDisplay(value) {
  if (inputValue == "0") {
    inputValue = value;
  } else {
    inputValue += value;
  }
  document.getElementById("display").value = inputValue;
}

function clearDisplay() {
  inputValue = "0";
  document.getElementById("display").value = "0";
}

function calculate() {
  try {
    inputValue = eval(inputValue).toString();
    document.getElementById("display").value = inputValue;
  } catch (error) {
    document.getElementById("display").value = "ERROR";
  }
}
