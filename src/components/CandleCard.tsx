import Image from "next/image";

export interface ICandleCard {
  image: string;
  size: string;
  weight: string;
  timeOfBurning: string;
}

const CandleCard: React.FC<ICandleCard> = ({
  image,
  size,
  weight,
  timeOfBurning,
}) => {
  return (
    <div className="max-w-lg  rounded  shadow-lg m-10  ">
      <div className="group relative">
        <div className="invisible group-hover:visible  w-[100%] h-[25px] z-10 border-2 border-black border-b-0 absolute -mt-10 text-center"><p className="-mt-10">15cm</p></div>
        <div className="invisible group-hover:visible  z-10  absolute  -mt-20  "></div>
        <div className="relative">
        <div className="invisible group-hover:visible  w-[25px] h-[100%] z-10 border-2 border-black border-l-0 absolute right-0 -mr-10 "><div className="relative  h-[100%] flex items-center"><p className="absolute -right-16">25cm</p></div></div>
        <Image
          className=" transition hover:scale-105 duration-500  z-0"
          src={image}
          height={600}
          width={540}
          alt="CandleImage"
        ></Image>
        </div>
       
      </div>

      <div className="mx-6 mt-10">
        <h2>{size}</h2>
        <div className="flex mx-auto justify-between">
          <p>Вага: {weight}</p>
          <p>Час горіння: {timeOfBurning}</p>
        </div>
      </div>
    </div>
  );
};

export default CandleCard;
