document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("stressForm");
  const calculateBtn = document.getElementById("calculateBtn");
  const resultDiv = document.getElementById("result");
  const stressLevelSpan = document.getElementById("stressLevel");
  const suggestionsList = document.getElementById("suggestions");

  calculateBtn.addEventListener("click", calculateStress);

  function calculateStress(event) {
    event.preventDefault();

    let stressLevel = 0;
    let sumValue = 0;

    // Loop through the form inputs and calculate stress level
    for (let i = 0; i < form.elements.length; i++) {
      if (form.elements[i].checked) {
        stressLevel += parseInt(form.elements[i].value);
      }
    }

    // Calculate average stress level
    console.log("Stresslevel" + stressLevel)

    // Update the UI with stress level and suggestions
    stressLevelSpan.textContent = stressLevel.toFixed(2);
    generateSuggestions(stressLevel);
    resultDiv.classList.remove("hidden");
  }
  console.log(form.elements.length);
  console.log(form.elements[1].type);

  
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
