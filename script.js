var d = document;
var result = 0;
var currentInput = "";
var keyPressed = false;
var btnPressed = false;
var resultGenerated = false;

var inputBox = d.getElementById("user-input"),
  numberInput = Array.from(d.getElementsByClassName("number-val")),
  operatorInput = Array.from(d.getElementsByClassName("operator-sign")),
  helperInput = Array.from(d.getElementsByClassName("helper"));

inputBox.innerHTML = "0";

numberInput.forEach(item => {
  item.addEventListener('click', () => {

    // if (keyPressed && btnPressed && resultGenerated == false) {
    //   return;
    // }

    // console.log("Number Input Triggered");
    btnPressed = true;

    if (currentInput == "0") {
      currentInput = "";
    }
    setNewInput(item.getAttribute("aria-valuetext"));
    // console.log("Button Props: " + item.getAttribute("aria-valuetext"));
    // console.log("Current Input: " + currentInput);

  });
});

operatorInput.forEach(item => {
  item.addEventListener('click', () => {

    // console.log("Operator Input Triggered");

    if (currentInput == "0") {
      currentInput = "";
    }
    setNewInput(item.getAttribute("aria-valuetext"));

    // console.log("Button Props: " + item.getAttribute("aria-valuetext"));
    // console.log("Current Input: " + currentInput);

  });
})

helperInput.forEach(item => {
  item.addEventListener('click', () => {

    // console.log("Helper Input Triggered");
    var trigger = "";

    if (currentInput == "0") {
      currentInput = "";
    }
    trigger = item.getAttribute("aria-valuetext");
    callTrigger(trigger);

  });
});

document.addEventListener("keydown", (event) => {
  var k = event.key;
  if (k == "Backspace") {

    currentInput = currentInput.substr(0, currentInput.length - 1);
    if (currentInput.length == 0) {
      currentInput = "0";
    }
    inputBox.innerHTML = "" + currentInput;
    // console.log("Key Pressed: " + k);


  }
  else if (k == ".") {
    if (currentInput == "0") {

      currentInput = "";
      currentInput += k.toString();
      inputBox.innerHTML += currentInput;

    } else {

      currentInput = currentInput + k.toString();
      inputBox.innerHTML = "" + currentInput;

    }
    // console.log("Current Input: " + currentInput);

  }
  else if (Number.isInteger(parseInt(k))) {

    keyPressed = true;

    if (currentInput == "0") {

      currentInput = "";

    }

    numberKey = parseInt(k);
    currentInput = currentInput + numberKey.toString();
    inputBox.innerHTML = "" + currentInput;

    // console.log("Key Pressed: " + k + ", Current Input: " + currentInput);

  }
  else if (k == "Delete") {

    currentInput = "0";
    inputBox.innerHTML = "" + currentInput;
    // console.log("Current Input: " + currentInput);

  }
  else if (k == "+") {

    currentInput = currentInput + k.toString();
    inputBox.innerHTML = "" + currentInput;
    // console.log("Key Pressed: " + k + ", Current Input: " + currentInput);

  }
  else if (k == "-") {

    currentInput = currentInput + k.toString();
    inputBox.innerHTML = "" + currentInput;
    // console.log("Key Pressed: " + k + ", Current Input: " + currentInput);

  }
  else if (k == "*") {

    currentInput = currentInput + k.toString();
    inputBox.innerHTML = "" + currentInput;
    // console.log("Key Pressed: " + k + ", Current Input: " + currentInput);

  }
  else if (k == "%") {

    currentInput = currentInput + k.toString();
    inputBox.innerHTML = "" + currentInput;
    // console.log("Key Pressed: " + k + ", Current Input: " + currentInput);

  }
  else if (k == "/") {

    currentInput = currentInput + k.toString();
    inputBox.innerHTML = "" + currentInput;
    // console.log("Key Pressed: " + k + ", Current Input: " + currentInput);

  }
  else if (k == "Enter" || k == "=") {

    // console.log(keyPressed, btnPressed);

    if (keyPressed && btnPressed) {
      document.removeEventListener("keydown", () => { });
    }
    resultGenerated = true;
    inputBox.innerHTML = "";
    inputBox.innerHTML = generateHasil(currentInput);
    // console.log("Key Pressed: " + k + ", Current Input: " + currentInput);

  }
  else if (k == "Shift") {

    // DO NOTHING

  }
});

function generateHasil(input) {

  console.log('Generate Hasil Triggered');
  if (input[0] == "0") {
    input = input.substr(1);
  }

  result = eval(input);
  currentInput = result.toString();
  // console.log("Current Input: " + currentInput);

  return result.toString();
}

function callTrigger(trigger) {
  if (trigger == "=") {

    inputBox.innerHTML = "";
    // console.log("Current Input(From callTrigger()): " + currentInput + ", Trigger Called: " + trigger);
    inputBox.innerHTML = generateHasil(currentInput);

  } else if (trigger == "AC") {

    currentInput = "0";
    inputBox.innerHTML = "" + currentInput;
    // console.log("Current Input(From callTrigger()): " + currentInput + ", Trigger Called: " + trigger);

  } else if (trigger == "C") {

    currentInput = currentInput.substr(0, currentInput.length - 1);
    if (currentInput.length == 0) {
      currentInput = "0";
    }
    inputBox.innerHTML = "" + currentInput;
    // console.log("Current Input(From callTrigger()): " + currentInput + ", Trigger Called: " + trigger);

  }
}

function setNewInput(input) {
  currentInput += input;
  applyDisplay(currentInput);
}

function applyDisplay(input) {
  console.log(input);
  resultGenerated = true;
  inputBox.innerHTML = input;
}
