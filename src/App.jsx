import './App.css';
import { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([])

  const fetchCharacters = async () => {
    const url = process.env.NODE_ENV === 'development' ? '/' : 'https://rickandmortyapi.com/api/character'
    const { results } = await fetch(url).then(res => res.json())
    setCharacters(results)
  }

  return (
    <div className="App">
      <header className="App-header">
        <ul data-testid="characters-list">
          {characters.map(character => (
            <li key={character.name} data-testid='character'>{character.name} and origin, {character.origin.name}</li>
          ))}
        </ul>
        <button onClick={fetchCharacters} data-testid='fetch-button'>
          Fetch characters
        </button>
      </header>
    </div>
  );
}

export default App;