import React, { useState } from 'react';

const App = () => {
  const [bgColor, setBgColor] = useState('#ffffff');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleChangeColor = () => {
    setBgColor(getRandomColor());
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: bgColor }}>
      <div className="p-10 rounded-lg shadow-lg bg-white text-black mb-4">
        <h1 className="text-2xl font-bold">Random Color Changer</h1>
        <p className="mt-2">Current Color: {bgColor}</p>
      </div>
      <button
        onClick={handleChangeColor}
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Change Color
      </button>
    </div>
  );
};

export default App;
