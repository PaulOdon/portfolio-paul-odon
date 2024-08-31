"use client";
import React from "react";
import PortfolioItem from "./PortfolioItem";
import classNames from "classnames";

export default function Portfolio() {
  const items = new Array(5).fill(null);
  return (
    <div className="flex flex-col w-full gap-2">
      <h3 className="text-3xl font-medium">Portfolio</h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-[30px]">
        {items.map((_, index) => {
          const isEvenRow = Math.floor(index / 2) % 2 === 0;
          const spanClass =
            index % 2 === 0
              ? isEvenRow
                ? "col-span-1"
                : "xl:col-span-2 lg:col-span-1 md:col-span-1 sm:col-span-1"
              : isEvenRow
              ? "xl:col-span-2 lg:col-span-1 md:col-span-1 sm:col-span-1"
              : "col-span-1";

          return (
            <PortfolioItem key={index} extraClassName={classNames(spanClass)} />
          );
        })}
      </div>{" "}
    </div>
  );
}
