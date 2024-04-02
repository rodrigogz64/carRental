import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip, CartesianGrid } from 'recharts';
import trackingData from '../assets/dummy-data/trackingData.json';

export default function TrackingChart({ selectedCategory }) {
  const filteredData = trackingData.filter(item => item.category === selectedCategory);

  return (
    <ResponsiveContainer width="100%">
      <LineChart data={filteredData}>
        <CartesianGrid strokeDasharray="0" stroke="#b7ffe913" />
        <XAxis dataKey="name" stroke="#ddd" />

        <Line
          type="monotone"
          dataKey="km"
          stroke="#e1424e"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />

        <Tooltip wrapperClassName="tooltip_style" />
      </LineChart>
    </ResponsiveContainer>
  );
}
