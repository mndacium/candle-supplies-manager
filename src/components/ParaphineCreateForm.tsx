
import { ReactElement, useEffect, useState } from "react";
import { IParaphine, Paraphine } from "@/models/IParaphine";
export interface IParaphineCreationForm {}

const ParaphineCreationForm: React.FC<IParaphineCreationForm> = () => {
  const [paraphine, setParaphine] = useState<IParaphine>({
    id:"",
    price: "",
    size: "",
    date: "",
  });
  const handleChange = (e : any) => {
    setParaphine((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  async function postParaphine() {
    
  }
  
  const handleSubmit = async (e : any) => {
    e.preventDefault();
    // Create an instance of Paraphine with paraphine
    const newParaphine = new Paraphine(paraphine);
    try {
      const response = await fetch(
        "https://zsu-candles-api.pp.ua/ParaffinTransacrions/CreateParaffinTransaction",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(paraphine)
        }
       
      );  
    } catch (error) {
      console.log("There was an error", error);
    }
    console.log(newParaphine);
    // Reset the form
    setParaphine({
      id: '',
      price: '',
      size: '',
      date: '',
    });
  };

 
   
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Paraphine</h1>
      <form onSubmit={handleSubmit}>
    
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="border border-gray-300 rounded px-4 py-2 w-full"
            type="text"
            id="price"
            name="price"
            value={paraphine.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="size">
            Size
          </label>
          <input
            className="border border-gray-300 rounded px-4 py-2 w-full"
            type="text"
            id="size"
            name="size"
            value={paraphine.size}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="date">
            Date
          </label>
          <input
            className="border border-gray-300 rounded px-4 py-2 w-full"
            type="date"
            id="date"
            name="date"
            value={paraphine.date}
            onChange={handleChange}
          />
        </div>
        <button
          className=" transition ease-in-out hover:-translate-y-1 hover:scale-105 bg-phOrange duration-200  rounded px-4 py-2  w-full"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
   
 
};

export default ParaphineCreationForm;
