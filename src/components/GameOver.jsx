export default function GameOver(props) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {props.winner && <p>{props.winner.toUpperCase()} Won!</p>}
      {!props.winner && <p>It's a draw!</p>}
      <p>
        <button onClick={props.onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
