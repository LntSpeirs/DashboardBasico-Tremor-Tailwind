import { Card, Flex, Metric, ProgressBar, Text } from "@tremor/react";

function CardBase() {
  return (
    <Card maxWidth="max-w-sm">
      <Text>Sales</Text>
      <Metric>71,465 €</Metric>
      <Flex className="mt-4">
        <Text>32% of anual target</Text>
        <Text>225,000 €</Text>
      </Flex>
      <ProgressBar porcentageValue={45} marginTop="mt-2" />
    </Card>
  );
}

export default CardBase;
