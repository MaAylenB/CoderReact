import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

const productos = [

  {
      id: "llavero-01",
      titulo: "Llavero Amelia",
      imagen: "./img/bijouterie/llavero1.jpg",
      categoria: {
          nombre: "LLavero",
          id: "bijou"
      },
      precio: 2500
  },
  {
      id: "llavero-02",
      titulo: "Llavero Cala",
      imagen: "/img/bijouterie/llavero2.jpg",
      categoria: {
          nombre: "Llavero",
          id: "bijou"
      },
      precio: 3500
  },
  {
      id: "pulsera-03",
      titulo: "Pulsera Paz",
      imagen: "./img/bijouterie/bijou3.jpg",
      categoria: {
          nombre: "Pulsera 03",
          id: "bijou"
      },
      precio: 4000
  },
  {
      id: "pulsera-04",
      titulo: "Pulsera Vida",
      imagen: "./img/bijouterie/bijou4.jpg",
      categoria: {
          nombre: "Pulsera 04",
          id: "bijou"
      },
      precio: 3500
  },
  {
      id: "choker-05",
      titulo: "Choker Linda",
      imagen: "./img/bijouterie/bijou5.jpg",
      categoria: {
          nombre: "Pulsera 05",
          id: "bijou"
      },
      precio: 4500
  },
  
  {
      id: "billetera01",
      titulo: "Billetera Clara",
      imagen: "./img/billeteras/billetera1.jpeg",
      categoria: {
          nombre: "billeteras",
          id: "Billeteras"
      },
      precio: 5500
  },
  {
    id: "billetera02",
    titulo: "Billetera Ana",
    imagen: "./img/billeteras/billetera2.jpeg",
      categoria: {
        nombre: "billeteras",
        id: "Billeteras"
      },
      precio: 5000
  },
  {
    id: "billetera03",
    titulo: "Billetera Alessia",
    imagen: "./img/billeteras/billetera3.jpeg",
      categoria: {
        nombre: "billeteras",
        id: "Billeteras"
      },
      precio: 5500
  },
  {
    id: "billetera04",
    titulo: "Billetera Camila",
    imagen: "./img/billeteras/billetera4.jpeg",
      categoria: {
        nombre: "billeteras",
        id: "Billeteras"
      },
      precio: 7500
  },
  {
    id: "billetera05",
    titulo: "Billetera Gina",
    imagen: "./img/billeteras/billetera5.jpeg",
      categoria: {
        nombre: "billeteras",
        id: "Billeteras"
      },
      precio: 4500
  },
  {
    id: "billetera06",
    titulo: "Billetera Geraldine",
    imagen: "./img/billeteras/billetera6.jpeg",
      categoria: {
        nombre: "billeteras",
        id: "Billeteras"
      },
      precio: 8000
  },
  {
    id: "billetera07",
    titulo: "Billetera Silvina",
    imagen: "./img/billeteras/billetera7.jpeg",
      categoria: {
        nombre: "billeteras",
        id: "Billeteras"
      },
      precio: 8000
  },
  {
    id: "billetera08",
    titulo: "Billetera Ceci",
    imagen: "./img/billeteras/billetera8.jpeg",
      categoria: {
        nombre: "billeteras",
        id: "Billeteras"
      },
      precio: 9000
  },

  {
      id: "cartera01",
      titulo: "Cartera Guada",
      imagen: "./img/carteras/cartera1.jpeg",
      categoria: {
          nombre: "carteras",
          id: "carteras"
      },
      precio: 15000
  },
  {
    id: "cartera02",
    titulo: "Cartera Wayra",
    imagen: "./img/carteras/cartera2.jpeg",
      categoria: {
        nombre: "carteras",
        id: "carteras"
      },
      precio: 10000
  },
  {
    id: "cartera03",
    titulo: "Cartera Caro",
    imagen: "./img/carteras/cartera3.jpeg",
      categoria: {
        nombre: "carteras",
        id: "carteras"
      },
      precio: 9500
  },
  {
    id: "cartera04",
    titulo: "Cartera Ari",
    imagen: "./img/carteras/cartera4.jpeg",
      categoria: {
        nombre: "carteras",
        id: "carteras"
      },
      precio: 11000
  },
  {
    id: "cartera05",
    titulo: "Cartera Eri",
    imagen: "./img/carteras/cartera5.jpeg",
      categoria: {
        nombre: "carteras",
        id: "carteras"
      },
      precio: 25000
  }
];