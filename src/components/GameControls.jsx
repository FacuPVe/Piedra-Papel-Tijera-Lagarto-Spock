// Compononente para controles adicionales del juego

const GameControls = ({ onReset }) => (
    <button className="mt-8 bg-red-500 border-b-4 border-red-900 text-white hover:bg-red-600 "onClick={onReset}>Reiniciar</button>
  );
  
  export default GameControls;
  