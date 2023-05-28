
import { ReactElement, useEffect, useState} from "react";
import { IParaphine, Paraphine } from "@/models/IParaphine";
export interface IParaphineCreationForm {

  handleFormClose:(arg: boolean) => void;
}

const ParaphineCreationForm: React.FC<IParaphineCreationForm> = ({handleFormClose}) => {
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
    handleFormClose(false);
  };

 
   
  return (
    <div className="max-w-md mx-auto p-4">
      
      <form onSubmit={handleSubmit} className="relative">
 

  <div className="mb-4">
    <label className="block text-gray-700 mb-2 font-semibold text-xl"  htmlFor="price">
      Кількість витрачених грошей
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
    <label className="block text-gray-700 mb-2 font-semibold text-xl" htmlFor="size">
      Кількість парафіну
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
    <label className="block text-gray-700 mb-2 font-semibold text-xl" htmlFor="date">
      Дата
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

export default ParaphineCreationForm;
