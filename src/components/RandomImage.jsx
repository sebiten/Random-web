import Image from 'next/image';
import React, { useState } from 'react';

const RandomImageComponent = () => {
  const images = [
    "gif1.gif",
    "gif2.gif",
    "gif3.gif",
    "gif4.gif",
    "05.gif",
    // agrega aquí más imágenes
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setSelectedImage(images[randomIndex]);
  };


  return (
    <div className='bg-gray-500 flex flex-col gap-5 justify-center mx-auto'>
      <Image 
      width={700}
      height={700}
      src={`/${selectedImage}`} 
      className='w-1/2 mx-auto'
      alt="Random Image" />
      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto" onClick={handleClick}>Show Another Image</button>
    </div>
  );
};

export default RandomImageComponent;
