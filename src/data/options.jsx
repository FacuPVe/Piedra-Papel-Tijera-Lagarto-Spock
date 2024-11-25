//Este archivo contiene todas las opciones del juego junto con sus respectivas reglas

export const options = [
    { id: "piedra", name: "Piedra", beats: ["tijeras", "lagarto"] },
    { id: "papel", name: "Papel", beats: ["piedra", "spock"] },
    { id: "tijeras", name: "Tijera", beats: ["papel", "lagarto"] },
    { id: "lagarto", name: "Lagarto", beats: ["spock", "papel"] },
    { id: "spock", name: "Spock", beats: ["tijeras", "piedra"] }
  ];
  