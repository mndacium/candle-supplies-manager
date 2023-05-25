import React from "react";
import Image from "next/image";

export interface IPostComponent {
  image: string;
  description: string;
  username: string;
  created: string;
  isLeftSided: boolean;
}

const PostComponent: React.FC<IPostComponent> = ({
  image,
  description,
  username,
  created,
  isLeftSided,
}) => {
  const [imageUrl, setImageUrl] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch("https://s3.eu-central-1.amazonaws.com/zsucandles.posts/a4e9a3a8-6843-44b4-87f9-b8079e31e920?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJHMEUCIG6Zweug5XwpCD868Z31%2Bp1KyfQXG8uEpuLqBlEPOJ12AiEA1JfSDVjGdtcm37vv5FieWXkkZu35Nfz99TyXjeks2WEqigMI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgw2NjM4NjI5NTUzMDUiDLT0HV0Ra59NOjA1hCreAp8p0gthJ2yxVCXfpbxcLyAu3zBimJiycED%2BgntQ%2Bi1o%2FHon6DSeIkrZYxupY%2F6eXuDmEAQstN9UxjINifBOBznDNaK%2BKc%2FtJ0lrvH%2BI4LxNOkOlFuevx2UF%2FiFIE319ff3hUPnSJsuVNAHO%2BSVrhNo1%2BBrq%2B9KZn3%2Fp811bQOBOjv8gIlw6J5xcH0F6c8h7RZzsZgFv3jxg4Fac03Flkt%2BLZFV8i8APGJ89BMw8zdLvp2kC1uV90yNuSGKLtv%2F3oCCHS91q60mSrbiEOTSm88XK%2FXX83bQxzNdH7TUxVK0RAuHeDJoUT4InCv4IMecbHBTnOoyPxr1%2FWLPEvz8i7LgkmVOT%2FPHr00%2BnWXhd%2BA0EcpTTt5nY0sjq0qCWvSg5%2B%2FLL%2B%2BACCOIu3%2Fs%2F8u7GHcJEjp1S2WgS6MwmBbqdKFpnMUT6a8PYVrzXRLpuMvgdG7rW2tpnq5lmqOV50rLuMK6JtKMGOrMCVwr%2FIzAlQoDYBmjniAWCHSjmOr1hEZaFzTPDhHe9kr2ZupM00rZPjcO369%2B9Zph8GWAP5GjUxq%2FS%2F6mUPWhj%2FJV7NA5WGNulFjL4wLx45JzPb1wcg9ODvwQQpO7wfMYypKeIRnFvheYO7EstN3d5DWUe4CcRomtyh5iX27VvU%2F6VMbKSIQgjRCPc0ncvGPFyHxyoJyj6xglfoNtIqB6R1R4sjvRmszwB6jz2HsBu%2FT9IsHSqsfEnLHkKms%2BHcchaUdGcNldo3bJHZ%2FmkGJrK4CZK83JUhIv03mFhuO1OZlnXrYVEx0URFvSdX14rqCk64TIoXqig46%2FubUenSaSfj3p2xJwLXf4BvHqjLaDwwK52hQV2pXlxs7YPCbSSgSG0oWVj0byByd%2F51cOesanKRWWFfw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230523T183106Z&X-Amz-SignedHeaders=host&X-Amz-Expires=180&X-Amz-Credential=ASIAZVEKQZUUYAIEWAE5%2F20230523%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=040157241510eaf8c62b1a44444667b191e4d1e371b8f6823143fce1b0afcd27");
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        setImageUrl(objectUrl);
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
      <div className="font-normal text-2xl text-gray-400 dark:text-gray-300">
        <div className="">{username}</div>
        <div className="">{created}</div>
      </div>
    </div>
  ) : (
    <div className="w-[50%] text-left mr-2">
      <p>{description}</p>
      <div className="font-normal text-2xl text-gray-400 dark:text-gray-300">
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
