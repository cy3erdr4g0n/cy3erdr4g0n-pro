// ColorModeIcon.js
import React from "react";

import { IoSunnyOutline } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";

export default function ColorModeIcon({ isDarkMode, toggleColorMode }) {
  return (
    <button
      className="rounded-full p-2 focus:outline-none"
      onClick={toggleColorMode}
    >
      {isDarkMode ? <IoSunnyOutline size={25} /> : <LuMoonStar size={25} />}
    </button>
  );
}
