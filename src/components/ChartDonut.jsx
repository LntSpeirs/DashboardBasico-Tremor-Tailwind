import { Card, DonutChart, Title } from "@tremor/react";

const cities = [
  {
    name: "London",
    sales: 2400,
  },
  {
    name: "New York",
    sales: 1908,
  },
  {
    name: "Paris",
    sales: 3000,
  },
  {
    name: "Berlin",
    sales: 1398,
  },
  {
    name: "Madrid",
    sales: 2000,
  },
  {
    name: "Rome",
    sales: 4000,
  },
  {
    name: "Tokyo",
    sales: 9875,
  },
];

function ChartDonut() {
  return (
    <div className="m-6">
      <Card>
        <Title>Sales by city</Title>
        <DonutChart
          data={cities}
          category="sales"
          dataKey="name"
          className="mr-6"
          colors={[
            "yellow",
            "violet",
            "indigo",
            "rose",
            "cyan",
            "green",
            "lime",
          ]}
        />
      </Card>
    </div>
  );
}

export default ChartDonut;
