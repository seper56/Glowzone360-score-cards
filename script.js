document.getElementById('calculate-button').addEventListener('click', function() {
    var totalScore = 0;
    
    for (var hole = 1; hole <= 18; hole++) {
      var score = parseInt(document.getElementById('hole' + hole).value);
      
      if (!isNaN(score)) {
        totalScore += score;
      }
    }
    
    document.getElementById('total-score').textContent = 'Total Score: ' + totalScore;
  });
  