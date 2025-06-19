//Date = 2025-06-19
//Shikha Shikha
//Assignment 01
//First of all, creating variables for selecting story words

var selections = ["", "", "", "", ""];

//Adding all the words for story that will be selected

function selectWord(column, index) {
  var words = {
    1: ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"],
    2: ["sat on", "danced with", "saw", "doesn't like", "kissed"],
    3: ["a funny", "a scary", "a gooey", "a slimy", "a barking", "a fat"],
    4: ["goat", "monkey", "cow", "frog", "bug", "worm"],
    5: ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]
  };

  selections[column - 1] = words[column][index];
}
// Using function for making the story
function buildStory() {
  var complete = selections.every(function (word) {
    return word !== "";
  });
// Adding an if else statement for the correct output
  if (complete) {
    var sentence = selections.join(" ");
    document.getElementById("story-output").textContent = sentence;
  } else {
    document.getElementById("story-output").textContent = "Please select a word from each column.";
  }
}


