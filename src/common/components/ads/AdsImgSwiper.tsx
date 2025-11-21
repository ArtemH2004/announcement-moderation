import { useEffect, useState } from "react";

interface IAdsImgSwiperProps {
  title: string;
  images: string[];
  className?: string;
}

export const AdsImgSwiper = ({
  title,
  images,
  className = "",
}: IAdsImgSwiperProps) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    setCurrentImage(images[0]);
  }, [images]);

  return (
    <div className={`flex flex-col rounded-xl ${className}`}>
      <div className="relative w-full">
        <img
          src={currentImage}
          alt={title}
          className={`object-cover object-center rounded-xl ${className}`}
        />

        <ul className="absolute inset-0 flex">
          {images.map((item, index) => (
            <li
              key={index}
              className="flex-1 h-full cursor-pointer"
              onMouseEnter={() => setCurrentImage(item)}
            />
          ))}
        </ul>

        <ul className="absolute bottom-4 right-4 z-100 flex items-center gap-x-0.5 pointer-events-none">
          {images.map((item, index) => (
            <li
              key={index}
              className={`size-1.5 rounded-full transition-sm ${
                currentImage === item ? "bg-white w-3" : "bg-gray-300"
              }`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
