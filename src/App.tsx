import "./css/style.css";
import { Heading } from "./components/Header";
import { CharacterData } from "./Characters";
import { Ranking } from "./components/Ranking";
import CharacterCard from "./components/Cards";

function App() {
  return (
    <>
      <Heading />
      <Ranking character={CharacterData} />
      <section id="character-cards">
        {CharacterData.map((character) => {
          return <CharacterCard key={character.name} character={character} />;
        })}
      </section>
    </>
  );
}

export default App;
