import React from "react";
import "../css/character-cards.css";
import { Character } from "../Characters";

class CharacterCard extends React.Component<{ character: Character }> {
  render() {
    const { character } = this.props;
    return (
      <div className="card">
        <div className="card-titles">
          <h3>{character.name}</h3>
          <h4>{character.nickName || ''}</h4>
        </div>
        <img src={character.imageUrl} alt="" />
        <p>{character.background}</p>
      </div>
    );
  }
}

export default CharacterCard;
