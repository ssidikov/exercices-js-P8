function convertToBinary() {
  // Get an input element and its value
  const decimalInput = document.getElementById("decimalInput").value;

  // Get an element to display the result
  const resultElement = document.getElementById("binaryResult");

  // Check if the input is the number (contains only numbers)
  if (!/^\d+$/.test(decimalInput)) {
    resultElement.textContent = ""; // Clean the result with incorrect input
    return;
  }

  // transform the value into a whole number
  const decimalNumber = parseInt(decimalInput, 10);

  // transform the whole number into binary format
  const binaryResult = decimalNumber.toString(2);

  // display a binary result
  resultElement.textContent = `Représentation binaire : ${binaryResult}`;
}
