import Image from "next/image";
import React, { useState } from "react";

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
    <div className="mt-5">
      <div>
        <Image
          width={700}
          height={700}
          src={`/${selectedImage}`}
          className="mx-auto w-[500px] h-[400px] rounded-xl"
          alt="Random Image"
        />
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto mt-2"
          onClick={handleClick}
        >
          Click
        </button>
      </div>
    </div>
  );
};

export default RandomImageComponent;
