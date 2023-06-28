function createScorecard() {
    var scorecard = [];
    for (var hole = 1; hole <= 18; hole++) {
      scorecard.push({
        hole: hole,
        par: 0,
        scores: [0, 0, 0, 0]
      });
    }
    return scorecard;
  }
  
  function updateScore(scorecard, hole, player, score) {
    scorecard[hole - 1].scores[player - 1] = score;
  }
  
  function calculateTotalScore(scorecard, player) {
    var totalScore = scorecard.reduce(function (sum, hole) {
      return sum + hole.scores[player - 1];
    }, 0);
    return totalScore;
  }
  
  function getWinner(scorecard) {
    var players = ["Player 1", "Player 2", "Player 3", "Player 4"];
    var scores = players.map(function (player, index) {
      return calculateTotalScore(scorecard, index + 1);
    });
    var minScore = Math.min.apply(null, scores);
    var winners = players.filter(function (_, index) {
      return scores[index] === minScore;
    });
    return winners;
  }
  
  function printScorecard(scorecard) {
    console.log("Hole\tPar\tPlayer 1\tPlayer 2\tPlayer 3\tPlayer 4");
    scorecard.forEach(function (holeData) {
      var hole = holeData.hole;
      var par = holeData.par;
      var scores = holeData.scores.join("\t");
      console.log(hole + "\t" + par + "\t" + scores);
    });
  }
  
  function playGame() {
    var scorecard = createScorecard();
    for (var hole = 1; hole <= 18; hole++) {
      var par = parseInt(prompt("Enter par for Hole " + hole + ": "));
      scorecard[hole - 1].par = par;
      for (var player = 1; player <= 4; player++) {
        while (true) {
          var score = parseInt(prompt("Enter score for Hole " + hole + ", Player " + player + ": "));
          if (!isNaN(score)) {
            updateScore(scorecard, hole, player, score);
            break;
          } else {
            alert("Invalid input. Please enter a number.");
          }
        }
      }
    }
    
    console.log("\n-- Scorecard --");
    printScorecard(scorecard);
    var winners = getWinner(scorecard);
    console.log("\nWinner(s): " + winners.join(", "));
  }
  
  // Start the game
  playGame();
  