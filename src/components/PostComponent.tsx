import React from "react";
import Image from "next/image";

export interface IPostComponent {
  imageUrl: string;
  description: string;
  username: string;
  created: string;
  isLeftSided: boolean;
}

const PostComponent: React.FC<IPostComponent> = ({
  imageUrl,
  description,
  username,
  created,
  isLeftSided,
}) => {
  const [image, setImage] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        setImage(objectUrl);
      } catch (error) {
        console.log("Error loading image", error);
      }
    };
    loadImage();
    URL.revokeObjectURL(imageUrl as string);
  }, [imageUrl]);

  const imageLayout = imageUrl ? (
    <Image src={imageUrl} width={500} height={500} alt={description} className="mb-6" />
  ) : (
    <div className="w-[500px] h-[500px] bg-gray-200 mb-6"></div>
  );

  const textLayout = (
    <div className="w-[100% lg:w-[50%] ml-2">
      <p>{description}</p>
      <div className="font-normal text-xl text-gray-400 dark:text-gray-400">
        <div>{username}</div>
        <div>{created}</div>
      </div>
    </div>
  );

  return (
    <div className={`flex flex-col lg:flex-row justify-around lg:items-center my-8 pb-12 border-b-2 border-phOrange`}>
      {isLeftSided ? (
        <>
          {imageLayout}
          
          {textLayout}
        </>
      ) : (
        <>
          {textLayout}
          {imageLayout}
        </>
      )}
    </div>
  );
};

export default PostComponent;
