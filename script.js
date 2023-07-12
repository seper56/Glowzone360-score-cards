// Get the score inputs and total elements
var scoreInputs = document.querySelectorAll('.score');
var totalElements = document.querySelectorAll('.total');

// Attach event listeners to score inputs
scoreInputs.forEach(function(input) {
  input.addEventListener('input', updateScores);
});

function updateScores() {
  // Your existing updateScores() function code
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

  // Display the winner in a modal pop-up
  var modal = document.getElementById('winnerModal');
  var winnerResult = document.getElementById('winnerResult');
  winnerResult.textContent = 'Winner: ' + winner;
  modal.style.display = 'block';

  // Close the modal when the user clicks the close button
  var closeBtn = document.getElementsByClassName('close')[0];
  closeBtn.onclick = function() {
    modal.style.display = 'none';
  };

  // Close the modal when the user clicks outside the modal
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}