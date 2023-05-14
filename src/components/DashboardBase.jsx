import { Tab, TabList, Title, Text } from "@tremor/react";
import { useState } from "react";
import CardGridMap from "./CardGridMap";
import ChartDonut from "./ChartDonut.jsx";
import TableBase from "./TableBase";

function DashboardBase() {
  const [selectedView, setSelectedView] = useState(2);
  return (
    <>
      <main className="bg-slate-200 p-6 sm:p-10">
        <Title>Dashboard</Title>
        <Text>Ejemplo de Dashboard</Text>
        <TabList
          defaultValue={selectedView}
          className="mt-6"
          onValueChange={(value) => setSelectedView(value)}
        >
          <Tab value={1} text="Principal" />
          <Tab value={2} text="Detalles" />
        </TabList>
      </main>
      {selectedView === 1 ? (
        <>
          <CardGridMap />
          {/* <Grid
            numCols={1}
            numColsSm={1}
            numColsMd={2}
            numColsLg={3}
            className="mt-6 gap-x-6 gap-y-6"
          >
            <Card>
              <div className="h-28 bg-indigo-200"></div>
            </Card>
            <Card>
              <div className="h-28 bg-indigo-300"></div>
            </Card>
            <Card>
              <div className="h-28 bg-indigo-400"></div>
            </Card>
          </Grid> */}
          <div className="mt-6">
            <ChartDonut />
          </div>
        </>
      ) : (
        <div className="m-3">
          <TableBase />
        </div>
      )}
    </>
  );
}

export default DashboardBase;
