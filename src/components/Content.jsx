import React from "react";
import Tab from "./Tab";
import { Widget, WidgetOrderCity } from "./Widget";

const Content = () => {
  return (
    <>
      <main className="mx-4 grid md:grid-cols-3 gap-4">
        <article className="md:col-span-2 p-4">
          <div className="grid grid-flow-col auto-cols-max">
            <Tab />
          </div>

          <section className="">
            <div className="">
              <Widget />
            </div>
          </section>
        </article>

        <aside className="p-4">
          {/* <p className="">Order Larger Cities</p>
          <WidgetOrderCity /> */}
        </aside>
      </main>
    </>
  );
};

export default Content;
