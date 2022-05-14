// Initialize button with user's preferred color
let showAnswer = document.getElementById("showAnswer");
var answerPlace = document.getElementById("wordleAnswer");
var answerDesc = document.getElementById("answerDesc");

showAnswer.addEventListener("click", async () => {
  console.log("here");
  chrome.storage.sync.get("answer", ({ answer }) => {
    console.log(answer);
    if (answer) {
      answerPlace.textContent = answer;
    } else {
      answerDesc.textContent = "GAME NOT DETECTED";
    }
  });
});
