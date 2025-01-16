import React, { useState } from "react";

const Sidebar = ({ selectedItem, setSelectedItem, categories }) => {
  const selection = (select) => {
    setSelectedItem(select);
  };
  return (
    <div className="mx-2 sm:w-1/4 my-8 rounded-lg bg-gray-700 bg-opacity-30 backdrop-blur-sm px-4 py-3 sm:py-9">
      <ul className="sm:space-y-6 flex overflow-x-scroll sm:block sm:overflow-hidden">
        {categories.map((category,index) => {
          return (
            <li
            key={index}
              onClick={() => selection(category.name)}
              className={`mx-2 cursor-pointer selection-none sm:m-0 p-1 px-2 sm:p-2 w-72 sm:w-full text-center backdrop-blur-lg shadow-xl rounded-2xl ${
                selectedItem == category.name
                  ? "bg-[var(--primary-color)] text-white"
                  : "text-[var(--primary-color)] bg-white font-bold"
              }`}
            >
              {category.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
