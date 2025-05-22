import React, { useState, useEffect } from "react";

function StarWarsGame() {
  const [character, setCharacter] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchRandomCharacter = () => {
    setLoading(true);
    const randomId = Math.floor(Math.random() * 83) + 1; // 1-83
    fetch(`https://www.swapi.tech/api/people/${randomId}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data.result.properties);
        setShowAnswer(false);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching character", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRandomCharacter();
  }, []);

  return (
    <div className="game-container">
      <h1>Star Wars Quiz</h1>
      {loading ? (
        <p className="loading">Ładowanie postaci...</p>
      ) : character ? (
        <div className="card">
          <h2>Kto to jest?</h2>
          <p className="question">{character.name}</p>
          {!showAnswer ? (
            <button onClick={() => setShowAnswer(true)}>Pokaż odpowiedź</button>
          ) : (
            <div className="answer">
              <p><strong>Gender:</strong> {character.gender}</p>
              <p><strong>height:</strong> {character.height} cm</p>
              <p><strong>Skin color:</strong> {character.skin_color}</p>
              <button onClick={fetchRandomCharacter}>Next character</button>
            </div>
          )}
        </div>
      ) : (
        <p>Nie udało się załadować postaci.</p>
      )}
    </div>
  );
}

export default StarWarsGame;

