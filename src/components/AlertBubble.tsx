import React, { useState } from "react";

export interface IAlertBubble {
  alertText: React.ReactNode;
  handleClosePopUp?:(arg:boolean) => void
}

const AlertBubble: React.FC<IAlertBubble> = ({ alertText,handleClosePopUp }) => {
  const [showAlert, setShowAlert] = useState<boolean>(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
    if (handleClosePopUp) {
      handleClosePopUp(false);
    }
  };

  return showAlert ? (
    <div className="w-[75vw] lg:w-[50vw] xl:w-[30vw] fixed top-10 left-[50%] translate-x-[-50%] min-h-[200px] flex items-center bg-white border border-phOrange rounded-md shadow-md p-4 z-50">
      <div className="w-[75%] mx-auto text-center">{alertText}</div>
      <button
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 focus:outline-none w-[30px] h-[30px]"
        onClick={handleCloseAlert}
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  ) : null;
};

export default AlertBubble;
