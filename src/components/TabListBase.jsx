import { TabList, Tab, Card } from "@tremor/react";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import ChartDonut from "./ChartDonut";
function TabListBase() {
  const [selectedView, setSelectedView] = useState(1);
  return (
    <>
      <TabList
        defaultValue={selectedView}
        className="mt-6"
        onValueChange={(value) => setSelectedView(value)}
      >
        <Tab value={1} text="Pestaña 1" icon={HandThumbUpIcon} />
        <Tab value={2} text="Pestaña 2" icon={HandThumbDownIcon} />
      </TabList>

      {selectedView === 1 ? (
        <Card>
          <div className="h-28 bg-emerald-300">
            <ChartDonut />
          </div>
        </Card>
      ) : (
        <Card>
          <div className="h-28 bg-blue-700" />
        </Card>
      )}
    </>
  );
}

export default TabListBase;
