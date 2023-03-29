import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PanelGallery from "./PanelGallery";

function MainGallery() {
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
        aria-label="Gallery Tabs user and all"
      >
        <Tab
          className="tab"
          label="You"
          id="simple-tab-0"
          aria-controls="simple-tabpanel-0"
        />
        <Tab
          className="tab"
          label="All"
          id="simple-tab-1"
          aria-controls="simple-tabpanel-1"
        />
      </Tabs>
      <PanelGallery className="panel" value={tabIndex} index={0} />
      <PanelGallery className="panel" value={tabIndex} index={1} />
    </main>
  );
}

export default MainGallery;
