import {
  BadgeDelta,
  Card,
  Flex,
  Grid,
  Metric,
  ProgressBar,
  Text,
} from "@tremor/react";

const data = [
  {
    title: "Sales",
    metric: "$ 12,699",
    progress: 15.9,
    target: "$ 80,000",
    delta: "13.2%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Profit",
    metric: "$ 45,564",
    progress: 36.5,
    target: "$ 125,000",
    delta: "23.9%",
    deltaType: "increase",
  },
  {
    title: "Customers",
    metric: "1,072",
    progress: 53.6,
    target: "2,000",
    delta: "10.1%",
    deltaType: "moderateDecrease",
  },
];

const CardGridMap = () => {
  return (
    <>
      <Grid
        numCols={1}
        numColsSm={1}
        numColsMd={2}
        numColsLg={3}
        className="m-6 gap-x-6 gap-y-6"
      >
        {data.map((item) => (
          <Card key={item.title}>
            <Flex>
              <div className="mt-6">
                <Text>{item.title}</Text>
                <Metric>{item.metric}</Metric>
              </div>
              <BadgeDelta deltaType="increase">{item.delta}</BadgeDelta>
            </Flex>
            <Flex className="mt-4 space-x-2">
              <Text>{`${item.progress}% (${item.metric})`}</Text>
              <Text>{item.target}</Text>
            </Flex>
            <ProgressBar percentageValue={item.progress} marginTop="mt-3" />
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default CardGridMap;
