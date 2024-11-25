import React from 'react';
import { options } from "../data/options";
import useChoices from "../hooks/useChoices";
import ResultDisplay from "./ResultDisplay";
import GameControls from "./GameControls";

const Game = () => {
  const { playerChoice, computerChoice, result, playRound } = useChoices();

  return (
    <div className="text-center">
      <h2 className="text-5xl font-bold mb-4 text-red-700">¡Juega contra el ordenador!</h2>
      <div className="flex justify-center space-x-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => playRound(option)}
            className="transform transition-transform hover:scale-110 focus:outline-none"
          >
            <img
              src={`../src/images/${option.id}.png`}
              alt={option.name}
              className="w-24 h-24 object-contain"
            />
          </button>
        ))}
      </div>
      <ResultDisplay result={result} />
      {playerChoice && computerChoice && (
        <div className="flex justify-center items-center space-x-4 mt-4">
          <div className="flex flex-col items-center">
            <span className="text-3xl"><strong>Jugador</strong></span>
            <img
              src={`../src/images/${playerChoice.id}.png`}
              alt={playerChoice.name}
              className="w-32 h-32 object-contain"
            />
          </div>
          <span className="text-3xl"><strong>VS</strong></span>
          <div className="flex flex-col items-center">
            <span className="text-3xl"><strong>Bot</strong></span>
            <img
              src={`../src/images/${computerChoice.id}.png`}
              alt={computerChoice.name}
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>

      )}
      <GameControls onReset={() => window.location.reload()} />
    </div>
  );
};

export default Game;