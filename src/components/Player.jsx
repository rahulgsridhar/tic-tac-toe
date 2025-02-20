import { useState } from "react";

function Player({ initialName, symbol, isActive, handlePlayerChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  function handleEdit() {
    setIsEditing((edit) => !edit);
    if (isEditing) {
      handlePlayerChange(symbol, playerName);
    }
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let customPlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    customPlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {customPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
