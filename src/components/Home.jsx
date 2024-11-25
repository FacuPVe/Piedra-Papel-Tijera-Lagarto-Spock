import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row mt-12">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-8">
        <h2 className="text-3xl font-bold mb-4">¡Bienvenido a Piedra, Papel, Tijer, Lagarto, Spock!</h2>
        <p className="mb-6">¡Dale clic al botón y empieza a jugar!</p>
        <Link 
          to="/game" 
          className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-700 hover:text-white"
        >
          Comenzar
        </Link>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img 
          src="https://www.laguiago.com/wp-content/uploads/2015/09/63-man1cku1yqc12i974vesu5o8o1_5002.jpg" 
          alt="PPTLS ilustración" 
          className="w-3/4 md:w-2/3 lg:w-2/2 h-auto object-contain "
        />
      </div>
    </div>
  );
};

export default Home;
