  // Existing code goes here...

  // Get the score inputs and total elements
  var scoreInputs = document.querySelectorAll('.score');
  var totalElements = document.querySelectorAll('.total');

  // Attach event listeners to score inputs
  scoreInputs.forEach(function(input) {
    input.addEventListener('input', updateScores);
  });

  function updateScores() {
    // Iterate over the players
    for (var i = 0; i < totalElements.length; i++) {
      var totalScore = 0;
      var scores = [];

      // Iterate over the score inputs for each player
      for (var j = i; j < scoreInputs.length; j += totalElements.length) {
        var score = parseInt(scoreInputs[j].value);
        if (!isNaN(score)) {
          scores.push(score);
          totalScore += score;
        }
      }

      // Update the total score for the player
      totalElements[i].textContent = totalScore;
    }
  }

  function calculateTotalScore() {
    var players = document.querySelectorAll('.player-name');
    var maxScore = -Infinity;
    var winner = '';

    // Iterate over the players
    for (var i = 0; i < totalElements.length; i++) {
      var totalScore = parseInt(totalElements[i].textContent);
      if (totalScore > maxScore) {
        maxScore = totalScore;
        winner = players[i].value;
      }
    }
    // Display the winner
    var winnerElement = document.getElementById('winnerResult');
    winnerElement.textContent = 'Winner: ' + winner;

    var modal = document.getElementById('winnerModal');
    modal.style.display = 'block';
  }

  function closeModal() {
    var modal = document.getElementById('winnerModal');
    modal.style.display = 'none';
  }