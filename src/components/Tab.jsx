import React, { useState } from "react";
import { Widget, WidgetTomorrow, Widget5Days } from "./Widget";

const Tab = () => {
  const [tab, setTab] = useState("tab1");

  return (
    <>
      <div className="tabs">
        <a className="tab tab-lifted" onClick={() => setTab("tab1")}>
          Today
        </a>
        <a className="tab tab-lifted" onClick={() => setTab("tab2")}>
          Tomorrow
        </a>
        <a className="tab tab-lifted" onClick={() => setTab("tab3")}>
          Next 5 days
        </a>

        {tab === "tab1" && <Widget />}
        {tab === "tab2" && <WidgetTomorrow />}
        {tab === "tab3" && <Widget5Days />}
      </div>
    </>
  );
};

export default Tab;
