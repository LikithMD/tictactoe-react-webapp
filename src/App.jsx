import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import GameOver from "./components/GameOver.jsx";
import { PLAYERS } from "./utils/const.js";
import { gameBoard, presentPlayer, declareWinner } from "./utils/helpers.js";

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = presentPlayer(gameTurns);
  const board = gameBoard(gameTurns);
  const winner = declareWinner(board, players);
  const gameDraw = gameTurns.length === 9 && !winner;

  function handlePlayerName(symbol, name) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: name };
    });
  }

  function handleActivePlayer(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = presentPlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onNameChange={handlePlayerName}
          />
          <Player
            name={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onNameChange={handlePlayerName}
          />
        </ol>
        {(winner || gameDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleActivePlayer} board={board} />
      </div>
    </main>
  );
}

export default App;
