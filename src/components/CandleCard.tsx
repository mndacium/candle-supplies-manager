import Image from "next/image";

export interface ICandleCard {
  image: string;
  size: string;
  weight: string;
  timeOfBurning: string;
  candleWidth:string
  candleHeight:string
}

const CandleCard: React.FC<ICandleCard> = ({
  image,
  size,
  weight,
  timeOfBurning,
  candleWidth,
  candleHeight
}) => {
  return (
    <div className=" max-w-lg min-w-[27%]  rounded  transition duration-500 shadow-md hover:shadow-xl lg:m-16 mt-32 lg:mt-16 relative">
      <div className="group relative">
        <div className="hidden transition group-hover:block   duration-300 w-[100%] h-[25px] z-10 border-2 border-black border-b-0 absolute -mt-10 text-center"><p className="-mt-10">{candleWidth}</p></div>
        <div className="hidden transition group-hover:block   duration-300 z-10  absolute  -mt-20  "></div>
        <div className="relative">
        <div className="hidden transition group-hover:block   duration-300  w-[25px] h-[100%] z-10 border-2 border-black border-l-0 absolute right-0 -mr-10 "><div className="relative  h-[100%] flex items-center"><p className="absolute -right-16">{candleHeight}</p></div></div>
        <Image
          className=" transition hover:scale-105 duration-300  z-0"
          src={image}
          height={600}
          width={540}
          alt="CandleImage"
        ></Image>
        </div>
       
      </div>

      <div className="mx-6 mt-10">
        <h2>{size}</h2>
        
          <p>Вага: {weight}</p>
          <p>Час горіння: {timeOfBurning}</p>
       
      </div>
    </div>
  );
};

export default CandleCard;
