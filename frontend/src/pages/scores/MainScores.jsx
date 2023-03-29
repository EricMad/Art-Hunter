import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PanelsScores from "./PanelsScores";

function MainScores() {
  const [tabIndex, setTabIndex] = React.useState(1);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <main className="main main--nav">
      <Tabs
        className="tabs"
        value={tabIndex}
        onChange={handleChange}
        aria-label="Scores Tabs Daily and Global"
      >
        <Tab
          className="tab"
          label="Daily"
          id="simple-tab-0"
          aria-controls="simple-tabpanel-0"
        />
        <Tab
          className="tab"
          label="Global"
          id="simple-tab-1"
          aria-controls="simple-tabpanel-1"
        />
      </Tabs>
      <PanelsScores className="panel" value={tabIndex} index={0} />
      <PanelsScores className="panel" value={tabIndex} index={1} />
    </main>
  );
}

export default MainScores;
