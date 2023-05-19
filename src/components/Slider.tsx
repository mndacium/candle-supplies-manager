import Image from "next/image";
import { useState } from "react";
export interface ICarousel {
  slides: string[];
}

const Carousel: React.FC<ICarousel> = ({ slides }) => {
  slides = ["/report1.jpg", "/report2.jpg"];
  const [currIndex, setCurrIndex] = useState<number>(0);
  const prevSlide = () => {
    const isFirstSlide = currIndex == 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currIndex - 1;
    setCurrIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currIndex == slides.length - 1;
    const newIndex = isLastSlide ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrIndex(slideIndex);
  };

  return (
    <div className="container h-[40vh] w-[100%] xl:w-[55%] m-auto relative ">
      <div
        style={{ backgroundImage: `url(${slides[currIndex]})` }}
        className="w-full h-full bg-center  bg-cover bg-no-repeat"
      >
        <div
          className=" w-[50%] opacity-0 hover:opacity-[35%] transition duration-500 h-full hover:block absolute top-[50%]  -translate-x-[4px] translate-y-[-50%] left-5 cursor-pointer rounded bg-gradient-to-r  from-phOrange from-25% via-[#ffffff] via-60% "
          onClick={prevSlide}
        ></div>
        {/* Right Arrow */}
        <div
          className=" w-[50%] h-full opacity-0 hover:opacity-[35%] transition duration-500 absolute top-[50%] -translate-x-[-4px] translate-y-[-50%] right-5 rounded cursor-pointer bg-gradient-to-l from-phOrange from-25% via-[#ffffff] via-60% "
          onClick={nextSlide}
        ></div>
      </div>
      {/* Left Arrow */}

      <div className="flex top-5 justify-center py-5">
        {slides.map((slide, slideIndex) => (
          <span
            key={slideIndex}
            className={`transition cursor-pointer mx-2 border-x-[35px] border-y-[4px]   hover:scale-[125%] duration-300 ${
              slideIndex == currIndex ? "border-phOrange" : "border-slate-300"
            }`}
            onClick={() => {
              goToSlide(slideIndex);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
