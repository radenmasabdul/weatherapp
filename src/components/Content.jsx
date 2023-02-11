import React from "react";
import Tab from "./Tab";
import { WidgetOrderCity } from "./Widget";

const Content = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto grid md:grid-flow-col gap-4">
        <article className="md:grid-col-span-2 p-4">
          <div className="grid md:grid-cols-1 gap-4 mt-4">
            <div>
              <Tab />
            </div>
            {/* <div>
              <Tab />
            </div> */}
          </div>
        </article>

        <aside className="md:grid-col-span-1 p-4">
          <p className="">Order Larger Cities</p>
          <WidgetOrderCity />
        </aside>
      </main>
    </>
  );
};

export default Content;
