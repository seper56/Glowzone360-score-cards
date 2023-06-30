function calculateScores() {
    var players = document.querySelectorAll('tr[id^="player"]');
    var winner = null;
    var lowestScore = Infinity;

    for (var i = 0; i < players.length; i++) {
        var player = players[i];
        var playerName = player.querySelector('.player-name').value;
        var totalScore = 0;

        var scores = player.querySelectorAll('.score');
        for (var j = 0; j < scores.length; j++) {
            var score = parseInt(scores[j].value);
            totalScore += score;
        }

        player.querySelector('.total').textContent = totalScore;

        if (totalScore < lowestScore) {
            lowestScore = totalScore;
            winner = playerName;
        }
    }

    document.getElementById('winner').textContent = 'Winner: ' + winner;
}