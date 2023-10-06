document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("stressForm");
  const calculateBtn = document.getElementById("calculateBtn");
  const resetBtn = document.getElementById("reset");
  const resultDiv = document.getElementById("result");
  const stressLevelSpan = document.getElementById("stressLevel");
  const suggestionsList = document.getElementById("suggestions");
  const input = document.getElementsByTagName("input")

  calculateBtn.addEventListener("click", calculateStress);
  resetBtn.addEventListener("click", resetSelections);


  function resetSelections() {

    // Loop through the radio buttons and uncheck them
    for (var i = 0; i < input.length; i++) {
      input[i].checked = false;
    }
  }


  function calculateStress(event) {
    event.preventDefault();
    let stressLevel = 0;

    // Loop through the form inputs and calculate stress level
    for (let i = 0; i < 50; i++) {
      if (input[i].checked) {
        stressLevel += parseInt(input[i].value);
      }
    }

    // Calculate average stress level
    console.log("Stresslevel" + "" + stressLevel)

    // Update the UI with stress level and suggestions
    stressLevelSpan.textContent = stressLevel.toFixed(2);
    generateSuggestions(stressLevel);
    resultDiv.classList.remove("hidden");
  }
  console.log(form.elements.length);
  for (let i = 0; i < 50; i++) {
    console.log(input[i].value);
  }

  
  function generateSuggestions(stressLevel) {
    // Add suggestions based on stress level
    suggestionsList.innerHTML = "";

    if (stressLevel >= 3) {
      const suggestions = [
        "Take a walk in nature",
        "Practice deep breathing exercises",
        "Listen to calming music",
        "Try meditation or mindfulness",
        "Engage in a hobby you enjoy",
      ];

      suggestions.forEach((suggestion) => {
        const li = document.createElement("li");
        li.textContent = suggestion;
        suggestionsList.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.textContent = "You're doing well! Keep up the good work.";
      suggestionsList.appendChild(li);
    }
  }
});
