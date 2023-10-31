import "../css/character-ratings.css";
import { Character } from "../Characters";

type CharacterProps = {
  character: Character[];
};

export function Ranking({ character }: CharacterProps) {
  const Top5Characters = [...character]
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 5);

  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {Top5Characters.map((character, characterIndex) => {
            const adjustedIndex = characterIndex + 1;
            const isEvenRow = adjustedIndex % 2 === 0;
            return (
              <tr
                key={character.name}
                className={`${isEvenRow ? "light" : "dark"}`}
              >
                <td>{character.name}</td>
                <td>{character.skillset}</td>
                <td>{character.votes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
