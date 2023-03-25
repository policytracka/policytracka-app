import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const BarGraph = (props : {data : any}) => {
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
        <Bar dataKey="amount" fill="#011972" />
      </BarChart>
    </ResponsiveContainer>
    );
  };
  export default BarGraph;