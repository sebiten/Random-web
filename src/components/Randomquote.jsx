import React, { useState } from 'react';

const quotes = [
  {
    quote: "La vida es 10% lo que nos pasa y 90% cómo reaccionamos a ello.",
    author: "Charles R. Swindoll"
  },
  {
    quote: "El éxito no es definitivo, el fracaso no es fatal: es el coraje para continuar lo que cuenta.",
    author: "Winston S. Churchill"
  },
  {
    quote: "Creo que puedes y ya estás a mitad de camino.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "No mires el reloj; haz lo que hace. Sigue adelante.",
    author: "Sam Levenson"
  },
  {
    quote: "El éxito no es cuán alto has escalado, sino cómo haces una diferencia positiva en el mundo.",
    author: "Roy T. Bennett"
  },
];

const RandomQuote = () => {
  const [selectedQuote, setSelectedQuote] = useState(0);

  const handleClick = () => {
    setSelectedQuote(Math.floor(Math.random() * quotes.length));
  };

  return (
    <div className="p-4 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-400 to-indigo-100 w-1/2 mx-auto mt-3 rounded-xl">
      <p className="text-gray-800 font-bold text-2xl">"{quotes[selectedQuote].quote}"</p>
      <p className="text-gray-600 text-right">- {quotes[selectedQuote].author}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
        Cambiar de quote
      </button>
    </div>
  );
};

export default RandomQuote;
