
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [{ date: "23.04", weigth: 300 , price:250  },{ date: "30.04", weigth: 400 , price:350 },{ date: "6.05", weigth: 200 , price:150 },{ date: "13.05", weigth: 150 , price:125 },{ date: "20.05", weigth: 300 , price:250 }];
export interface IGraphic {}

const Graphic: React.FC<IGraphic> = () => {
  return (
    // <LineChart
    //   width={600}
    //   height={300}
    //   data={data}
    //   margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    // >
    //   <Line type="monotone" dataKey="weigth" stroke="#8884d8" />
    //   <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    //   <XAxis dataKey="date" />
    //   <YAxis />
    //   <Tooltip />
    // </LineChart>
    <ResponsiveContainer width={'99%'} height="80%">
    <LineChart
      width={900}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend />
      <Line yAxisId="left" type="monotone" dataKey="weigth" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line yAxisId="right" type="monotone" dataKey="price" stroke="#82ca9d" />
    </LineChart>
    </ResponsiveContainer>
     
  );
};

export default Graphic;
