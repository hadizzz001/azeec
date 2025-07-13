'use client';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const NewsTicker = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await fetch('api/brand');
      const data = await response.json();
      const imgs = data.map(item => item.img?.[0]).filter(Boolean);
      setImages(imgs);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Duplicate the array to make sure the content is long enough for seamless loop
  const loopedImages = [...images, ...images];

  return (
    <div className="w-full py-2 mt-10 overflow-hidden mt-20 mb-20">
      <Marquee speed={60} gradient={false} pauseOnHover={false} direction="left">
        {loopedImages.map((src, index) => {
          const isLast = index === loopedImages.length - 1;

          return (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: isLast ? '70px' : '70px', // Add spacing except for last
              }}
            >
              <img
                src={src}
                alt={`brand-${index}`}
                style={{
                  height: '80px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
          );
        })}

      </Marquee>
    </div>
  );
};

export default NewsTicker;
