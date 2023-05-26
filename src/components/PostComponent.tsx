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
    <Image src={imageUrl} width={500} height={500} alt={description} />
  ) : (
    <div className="w-[500px] h-[500px] bg-gray-200"></div>
  );

  const textLayout = isLeftSided ? (
    <div className="w-[50%] text-right ml-2">
      <p>{description}</p>
      <div className="font-normal text-xl text-gray-400 dark:text-gray-300">
        <div className="">{username}</div>
        <div className="">{created}</div>
      </div>
    </div>
  ) : (
    <div className="w-[50%] text-left mr-2">
      <p>{description}</p>
      <div className="font-normal text-xl text-gray-400 dark:text-gray-300">
        <div className="">{username}</div>
        <div className="">{created}</div>
      </div>
    </div>
  );

  return (
    <div className="flex justify-around my-8">
      {imageLayout}
      {textLayout}
    </div>
  );
};

export default PostComponent;
