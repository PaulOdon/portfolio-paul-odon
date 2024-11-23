"use client";
import React from "react";
import PortfolioItem from "./PortfolioItem";
import classNames from "classnames";

export default function Portfolio() {
  const items = new Array(5).fill(null);
  return (
    <div className="flex flex-col w-full gap-2">
      <h3 className="text-3xl font-medium">Portfolio</h3>
      <div className="flex flex-col gap-5">
        {items.map((_, index) => {
          return <PortfolioItem key={index} />;
        })}
      </div>{" "}
    </div>
  );
}
