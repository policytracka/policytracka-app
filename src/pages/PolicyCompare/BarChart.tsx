import { index } from "d3";
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const BarGraph = (props : {data : any}) => {
  const barColors = ["#1f77b4", "#ff7f0e", "#2ca02c"]
    return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount">
        {
                        props.data.map((entry: any, index: number) => (
                            <Cell key={`cell-${index}`} fill={`#${((Math.random() * 0xfffff * 1000000).toString(16)).slice(0, 6)}`} />
                        ))
        }
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    );
  };
  export default BarGraph;