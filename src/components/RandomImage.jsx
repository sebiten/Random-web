import React, { useState } from 'react';

const RandomImageComponent = () => {
  const images = [
    "01.jpg",
    "02.jpg",
    "03.png",
    "04.jpg",
    "05.gif",
    // agrega aquí más imágenes
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setSelectedImage(images[randomIndex]);
  };

  return (
    <div>
      <img src={selectedImage} alt="Random Image" />
      <button onClick={handleClick}>Show Another Image</button>
    </div>
  );
};

export default RandomImageComponent;
