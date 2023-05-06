import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { HiBars3BottomLeft } from "react-icons/hi2";

export function Sidebar({ sidebar, setSidebar, username }) {
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="w-full h-28 border-r shadow-lg border-gray-200  px-9 py-10">
        <div className="flex flex-row items-center">
          <Link to={"#"} className="text-4xl" onClick={showSidebar}>
            <HiBars3BottomLeft />
          </Link>
          <div className="ml-auto">
            SELAMAT DATANG{" "}
            <strong className="text-uppercase">{username}</strong>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
