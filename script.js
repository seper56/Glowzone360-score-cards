const holeCount = 18; // Total number of holes
let players = ["Player 1", "Player 2", "Player 3", "Player 4"]; // Pre-defined players

// Generate rows for each hole with pre-defined players
generateScorecard();

function generateScorecard() {
  const scorecard = document.getElementById("scorecard");
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = "<th>Hole</th><th>Par</th>";
  for (let player of players) {
    headerRow.innerHTML += `<th>${player}</th>`;
  }
  scorecard.appendChild(headerRow);

  // Generate rows for each hole
  for (let hole = 1; hole <= holeCount; hole++) {
    const holeRow = document.createElement("tr");
    holeRow.innerHTML = `<td>${hole}</td><td>3</td>`;
    for (let i = 0; i < players.length; i++) {
      holeRow.innerHTML += `
        <td>
          <input
            type="number"
            class="score-input"
            min="0"
            oninput="updateScore(this, ${i}, ${hole})"
          />
        </td>
      `;
    }
    scorecard.appendChild(holeRow);
  }
}

function addPlayer() {
  const playerName = document.getElementById("player-name").value.trim();

  if (playerName === "") {
    alert("Please enter a valid player name.");
    return;
  }

  players.push(playerName);
  document.getElementById("player-name").value = "";

  // Update scorecard with new player column
  const scorecard = document.getElementById("scorecard");
  const headerRow = scorecard.rows[0];
  headerRow.innerHTML += `<th>${playerName}</th>`;

  // Generate input cells for the new player
  for (let hole = 1; hole <= holeCount; hole++) {
    const inputCell = document.createElement("td");
    inputCell.innerHTML = `
      <input
        type="number"
        class="score-input"
        min="0"
        oninput="updateScore(this, ${players.length - 1}, ${hole})"
      />
    `;
    scorecard.rows[hole].appendChild(inputCell);
  }
}

function updateScore(input, playerIndex, hole) {
  const score = parseInt(input.value);
  // Do any additional validation or data processing here if needed
  console.log(`Player: ${players[playerIndex]}, Hole: ${hole}, Score: ${score}`);
  calculateTotalScores();
}

function calculateTotalScores() {
  const totalScores = new Array(players.length).fill(0);

  for (let hole = 1; hole <= holeCount; hole++) {
    for (let i = 0; i < players.length; i++) {
      const input = document.querySelector(`#scorecard tr:nth-child(${hole + 1}) td:nth-child(${i + 3}) input`);
      const score = parseInt(input.value);
      totalScores[i] += score;
    }
  }

  for (let i = 0; i < players.length; i++) {
    const totalScoreCell = document.querySelector(`#scorecard tr:last-child td:nth-child(${i + 3})`);
    totalScoreCell.textContent = totalScores[i];
  }

  checkGameOver(totalScores);
}

function checkGameOver(totalScores) {
  const gameOver = totalScores
