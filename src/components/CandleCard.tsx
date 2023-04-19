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
    <div className="max-w-sm  rounded overflow-hidden shadow-lg">
      <Image className="transition hover:scale-105 duration 500" src={image} height={600} width={540} alt="CandleImage"></Image>
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
