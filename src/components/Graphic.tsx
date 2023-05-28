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
        "https://zsu-candles-api.pp.ua/ParaffinTransacrions/GetParaffinsStatistic",
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
            <YAxis yAxisId="right" orientation="right"  />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="size"
              name="Вага в кг"
              stroke="#FFA500"
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="price"
              name="Ціна в грн"
              stroke="#000000"

            />
          </LineChart>
        </ResponsiveContainer>
      );
    }
  }
};

export default Graphic;
