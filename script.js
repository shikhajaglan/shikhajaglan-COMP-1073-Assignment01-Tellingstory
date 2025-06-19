var selections = ["", "", "", "", ""];

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

function buildStory() {
  var complete = selections.every(function (word) {
    return word !== "";
  });

  if (complete) {
    var sentence = selections.join(" ");
    document.getElementById("story-output").textContent = sentence;
  } else {
    document.getElementById("story-output").textContent = "Please select a word from each column.";
  }
}
