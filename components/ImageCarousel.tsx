import { useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to get the three images based on the current index
  const getDisplayedImages = () => {
    const displayedImages = [];
    for (let i = 0; i < 3; i++) {
      displayedImages.push(images[(currentIndex + i) % images.length]);
    }
    return displayedImages;
  };

  const displayedImages = getDisplayedImages();

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        <button onClick={goToPrevious}>&lt;</button>
        {displayedImages.map((image, index) => (
          <div key={index} style={{ margin: "0 5px" }}>
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={150}
              height={150}
            />
          </div>
        ))}
        <button onClick={goToNext}>&gt;</button>
      </div>
    </div>
  );
}
