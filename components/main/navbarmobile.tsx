import React, { useState } from "react";

const Navbarmobile = ({
  isActiveDiscussion,
  setIsActiveDiscussion,
  isActiveMarket,
  setIsActiveMarket,
}: any) => {
  return (
    <nav>
      <div className="flex justify-between text-white border-b-8 border-white border-x-8 border-x-black bg-blue-900">
        <div
          className={`flex justify-center items-center w-full py-2 ${
            isActiveDiscussion
              ? "border-b-4 border-b-red-500 bg-blue-950"
              : "bg-blue-900 border-b-4 border-blue-900"
          }`}
          onClick={() => {
            setIsActiveDiscussion(true);
            setIsActiveMarket(false);
          }}
        >
          <span className="text-center font-semibold">Discussion Forum</span>
        </div>
        <div
          className={`flex justify-center items-center w-full py-2 ${
            isActiveMarket
              ? "border-b-4 border-b-red-500 bg-blue-950"
              : "bg-blue-900 border-b-4 border-blue-900"
          }`}
          onClick={() => {
            setIsActiveMarket(true);
            setIsActiveDiscussion(false);
          }}
        >
          <span className="text-center font-semibold">Market Stories</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbarmobile;
