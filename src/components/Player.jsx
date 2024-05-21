import { useState } from "react";

export default function Player(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(props.name);

  let playerContent = <span className="player-name">{name}</span>;

  function handleClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) props.onNameChange(props.symbol, name);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  if (isEditing) {
    playerContent = (
      <input type="text" required value={name} onChange={handleChange} />
    );
  }

  return (
    <li className={props.isActive ? "active" : undefined}>
      <span className="player">{playerContent}</span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
