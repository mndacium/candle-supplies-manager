import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ReactElement, useEffect, useState } from "react";
import { IParaphine, Paraphine } from "@/models/IParaphine";
export interface IGraphic {}

const Graphic: React.FC<IGraphic> = () => {
  const [data, setData] = useState<IParaphine[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  async function getData() {
    try {
      const response = await fetch(
        "https://zsu-candles-api.pp.ua/ParaffinTransacrions/GetParaffinsStatistic?from=2023-05-23T13%3A41%3A11.010Z&to=2024-05-24T13%3A41%3A11.010Z",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );
      const responseJson = await response.json();
      const parsedData: IParaphine[] = responseJson.data.map(
        (x: any) => new Paraphine(x)
      );

      setData(parsedData);
      setIsLoading(false);
    } catch (error) {
      console.log("There was an error", error);
    }
  }
  async function postData() {
    try {
      const response = await fetch(
        "https://zsu-candles-api.pp.ua/ParaffinTransacrions/CreateParaffinTransaction",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify("user")
        }
       
      );
      const responseJson = await response.json();
      const parsedData: IParaphine[] = responseJson.data.map(
        (x: any) => new Paraphine(x)
      );

      setData(parsedData);
      setIsLoading(false);
    } catch (error) {
      console.log("There was an error", error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  {
    if (isLoading) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <ResponsiveContainer width={"100%"} height="80%">
          <LineChart width={900} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="size"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="price"
              stroke="#82ca9d"
            />
          </LineChart>
        </ResponsiveContainer>
      );
    }
  }
};

export default Graphic;
