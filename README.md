# Piedra, Papel, Tijera, Lagarto, Spock con React + Vite
En este proyecto haré el juego Piedra, Papel, Tijera, Lagarto, Spock con React y Vite:
### Crear proyecto: 
Estando dentro de la carpeta donde quieres crear tu proyecto ejecuta el siguiente comando desde terminal: 
```
npm create vite@latest
```
Configuración del proyecto después de ejecutar el comando anterior:
- Project_name: react-pptls
- Framework: React
- Variant: Javascript
   
Una vez creado el proyecto será necesario instalar todas las dependencias (React, ReactDOM...):
```
cd react-pptls (para acceder al proyecto que se acaba de crear)
npm install
```

Para finalizar iniciaremos nuestro proyecto para ver si se inicia correctamente: 
```
npm run dev
```
Y una vez hecho todos los pasos anteriores ya podremos empezar a desarrollar el juego :)

# Tailwind CSS
Instalación de Tailwind CSS:
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Esto creará los archivos tailwind.config.js y postcss.config.js en el proyecto.

Modifica el archivo tailwind.config.js para añadir los archivos donde tu código está localizado: 
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
In the src/index.css file, import the Tailwind styles: `
```css
@tailwind base; 
@tailwind components; 
@tailwind utilities;
```
# React Router
Una biblioteca popular para el manejo de rutas en aplicaciones React.
Instalación de React Router
```
npm install react-router-dom
```
Modificación de App.js para definir las diferentes rutas que se pondrán en la página web:
```js
import { BrowserRouter as Router, Routes, Route } from 'react-router - dom'; 
import Home from './components/Home';
import Game from './components/Game';
import Contact from './components/Contact';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
```
# Demo
![PPTLS](https://github.com/user-attachments/assets/38d12464-139f-4302-b4b5-0bc34ef86354)
