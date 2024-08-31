"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PortfolioItemProps = {
  title?: string;
  type?: string;
  imgUrl?: string;
  extraClassName?: string;
};

export default function PortfolioItem(props: PortfolioItemProps) {
  const [hover, setHover] = React.useState(false);
  const { title, type, imgUrl, extraClassName } = props;
  const handleClickItem = () => {
    window.open("https://google.com", "_blank");
  };
  return (
    <div
      className={classNames(
        "flex w-full h-[285px] relative cursor-pointer",
        extraClassName
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClickItem}
    >
      <Image
        src={
          imgUrl ??
          "https://images.unsplash.com/photo-1721635513019-4dd5f5c18042?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="img"
        className="w-auto h-auto"
        layout="fill"
      />

      {hover && (
        <div className="absolute left-0 top-0 size-full bg-primary bg-opacity-75 flex flex-col items-center justify-center">
          <h3 className="text-white text-[16px] font-semibold">
            {title ?? "Branding & Illustration design"}
          </h3>
          <h4 className="text-white uppercase text-[12px] font-semibold tracking-wider">
            {type ?? "Desing"}
          </h4>
        </div>
      )}
    </div>
  );
}
