const answerObject = JSON.parse(localStorage["nyt-wordle-state"]);

chrome.storage.sync.set({
  answer: answerObject.solution ? answerObject.solution : null,
});
