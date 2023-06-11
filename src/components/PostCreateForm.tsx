import { ReactElement, useEffect, useState } from "react";
import S3 from "aws-sdk/clients/s3";
export interface IPostCreationForm {
  username: string;
  handleFormClose: (arg: boolean) => void;
}

const PostCreationForm: React.FC<IPostCreationForm> = ({
  username,
  handleFormClose,
}) => {
  const [post, setPost] = useState({
    image: "string",
    description: "",
    userName: username,
  });
  const s3 = new S3({
    region: "eu-central-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  const [blobImage, setBlobImage] = useState<File>();

  const handleChange = (e: any) => {
    setPost((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://zsu-candles-api.pp.ua/Post/CreatePost",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(post),
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        const presignedLink = responseData.data.presignedLink;
        if (blobImage) {
          const uploadResponse = await fetch(presignedLink, {
            method: "PUT",
            headers: {
              "Content-Type": blobImage.type,
            },
            body: blobImage,
          });
          console.log(uploadResponse);
        }
      } else {
        console.log("Request failed with status:", response.status);
      }
    } catch (error) {
      console.log("There was an error", error);
    }

    handleFormClose(false);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <form onSubmit={handleSubmit} className="relative">
        <div className="mb-4">
          <label
            className="block text-gray-700 mb-2 font-semibold text-xl"
            htmlFor="Опис"
          >
            Опис
          </label>
          <textarea
            className="border border-gray-300 rounded px-4 py-2 w-full resize-none font-semibold"
            id="description"
            name="description"
            value={post.description}
            onChange={handleChange}
            rows={8}
          />
        </div>
        <div className="flex items-center justify-center w-full mb-4">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {!blobImage ? (
                <>
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                 
                </>
              ) : (
                <div className="flex items-center">
                  <span className="mr-1">{blobImage.name}</span>
                  <svg
                    className="w-4 h-4 text-gray-500 cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setBlobImage(undefined)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
              )}
            </div>
            {blobImage==undefined && (
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) {
                    setBlobImage(file);
                  }
                }}
              />
            )}
          </label>
        </div>

        <button
          className="transition ease-in-out hover:-translate-y-1 hover:scale-105 bg-phOrange duration-200 rounded px-4 py-3 w-full font-bold text-2xl mb-3"
          type="submit"
        >
          Додати
        </button>
        <button
          className="transition ease-in-out hover:-translate-y-1 hover:scale-105 bg-phOrange duration-200 rounded  py-2 w-full font-bold text-2xl"
          onClick={() => handleFormClose(false)}
        >
          Відмінити
        </button>
      </form>
    </div>
  );
};

export default PostCreationForm;
