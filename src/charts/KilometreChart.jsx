import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

import KmStaticsData from '../assets/dummy-data/kilometreStatics.json';

export default function kilometreChart () {
  return (
    <ResponsiveContainer width="100%">
      <BarChart data={KmStaticsData}>
        <XAxis dataKey="name" stroke="#2884ff" />
        <Bar dataKey="kmStats" stroke="#2884ff" fill="#2884ff" barSize={30} />

        <Tooltip wrapperClassName="tooltip_style" cursor={false} />
      </BarChart>
    </ResponsiveContainer>
  );
}
