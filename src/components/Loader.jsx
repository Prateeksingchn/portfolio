import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1682100615199-93e280d2ca0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1713297158683-fd9ef22160e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D',
  '/path/to/clothes-image.jpg',
  '/path/to/food-image.jpg',
  '/path/to/cat-image.jpg',
  '/path/to/socks-image.jpg',
  '/path/to/soup-image.jpg',
  '/path/to/beach-couple-image.jpg',
  '/path/to/pasta-image.jpg',
];

function Loader() {
  const [count, setCount] = useState(0);
  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
          clearInterval(countInterval);
          return 100;
        }
        return prevCount + 1;
      });
    }, 50);

    const imageInterval = setInterval(() => {
      setVisibleImages((prev) => {
        if (prev.length >= images.length) {
          clearInterval(imageInterval);
          return prev;
        }
        return [...prev, images[prev.length]];
      });
    }, 500);

    return () => {
      clearInterval(countInterval);
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#f5f2e9]">
      <div className="relative w-[80vw] h-[80vh] max-w-4xl max-h-[600px]">
        {visibleImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Loader image ${index + 1}`}
            className="absolute object-cover w-1/3 h-1/3 transition-opacity duration-500"
            style={{
              top: `${Math.floor(index / 3) * 33.33}%`,
              left: `${(index % 3) * 33.33}%`,
              opacity: 1,
            }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-6xl font-bold text-gray-800">{count}%</p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-2xl font-serif italic text-gray-800">Welcome to my portfolio</h2>
      </div>
    </div>
  );
}

export default Loader;