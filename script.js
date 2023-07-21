var savedPoster = "";
var savedTitle = "";
var savedOverview = "";
var savedGener = ""'


var saveBtn = document.querySelector(".movie-container1");
saveBtn.addEventListener("click", function (event) {
  event.preventDefault();
  
var poster1 = document.querySelector("#poster_path1);
var title1 = document.querySelector("#title1);
var overview1 = document.querySelector("#overveiw1);
var gener1 = document.querySelector("#genre1);

  
localStorage.setItem("poster", timerCount);
localStorage.setItem("timerCount", timerCount);
localStorage.setItem("timerCount", timerCount);  
localStorage.setItem("timerCount", timerCount);

function displayTopScores() {
  var topScores = JSON.parse(localStorage.getItem("TopScores"));
  var top10List = document.getElementById("top10");
  top10List.innerHTML = ""; // Clear the existing content of the list

  // Loop through each score and create list items to display them
  for (var i = 0; i < topScores.length; i++) {
    var scoreItem = document.createElement("li");
    scoreItem.textContent = topScores[i].typedInitials + " - " + topScores[i].currentTime;
    top10List.appendChild(scoreItem);
  }
}

// Retrieve existing top scores from local storage
function renderMessage() {
  var allScores = JSON.parse(localStorage.getItem("InitialAndNum"));
  if (allScores !== null) {
    document.querySelector(".message").textContent = "You " + allScores.typedInitials +
      " received a time of " + allScores.currentTime + ".";
  }
  // Add the current score to the top scores list
  // Sort the top scores list based on the currentTime property in descending order
  var topScores = JSON.parse(localStorage.getItem("TopScores")) || [];
  topScores.push(allScores);
  topScores.sort(function (a, b) {
    return b.currentTime - a.currentTime;
  });

  // Keep only the top 10 scores
  topScores = topScores.slice(0, 10);

  // Store the updated top scores list back to local storage
  localStorage.setItem("TopScores", JSON.stringify(topScores));

  // Display the top scores in the top10 element
  displayTopScores();
}
