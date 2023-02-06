import React from "react";

import { BiSun } from "react-icons/bi";
import { BiMap } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search City..."
            className="input input-bordered w-full my-2 mx-2"
          />
        </div>
        <div className="flex-none">
          <BiMap className="md:text-4xl min-[320px]:text-2xl" />
          <p className="mx-2 md:text-base min-[320px]:text-sm">
            Bogor, Indonesia
          </p>
          <button className="mx-2">
            <BiSun className="md:text-4xl min-[320px]:text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
