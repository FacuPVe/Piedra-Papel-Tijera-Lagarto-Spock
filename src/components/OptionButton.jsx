// Componente para mostrar cada opción del juego

const OptionButton = ({ option, onClick }) => (
    <button onClick={() => onClick(option)}>
      {option.emoji} {option.name}
    </button>
  );
  
  export default OptionButton;
  