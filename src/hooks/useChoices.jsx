// Este archivo manejará la lógica del juego, incluyendo la seleción del jugador, la elección aleatoria del bot y la determinación del ganador
import { useState } from "react";
import { options } from "../data/options";

const useChoices = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const playRound = (choice) => {
    const computerRandomChoice = options[Math.floor(Math.random() * options.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerRandomChoice);

    if (choice.beats.includes(computerRandomChoice.id)) {
      setResult("¡Has ganado!");
    } else if (computerRandomChoice.beats.includes(choice.id)) {
      setResult("¡Has perdido!");
    } else {
      setResult("¡Empate!");
    }
  };

  return { playerChoice, computerChoice, result, playRound };
};

export default useChoices;
