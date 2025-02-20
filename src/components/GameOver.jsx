function GameOver({ winner, handleGameOver }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <h2>{winner} won!</h2>}
      {!winner && <h2>It's a Draw</h2>}
      <button onClick={handleGameOver}>Rematch!</button>
    </div>
  );
}

export default GameOver;
