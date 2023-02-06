import React from "react";

const Tab = () => {
  return (
    <>
      <div className="tabs">
        <a className="tab tab-lifted tab-active">Today</a>
        <a className="tab tab-lifted">Tomorrow</a>
        <a className="tab tab-lifted">Next 7 days</a>
      </div>
    </>
  );
};

export default Tab;
