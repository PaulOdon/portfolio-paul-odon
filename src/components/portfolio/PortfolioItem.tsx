"use client";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

type PortfolioItemProps = {
  title?: string;
  type?: string;
  imgUrl?: string;
  extraClassName?: string;
};

export default function PortfolioItem(props: PortfolioItemProps) {
  const { title, type, imgUrl, extraClassName } = props;

  const handleClickItem = () => {
    window.open("https://google.com", "_blank");
  };
  return (
    <div className={classNames("flex w-full relative cursor-pointer gap-4")}>
      <Image
        src="https://plus.unsplash.com/premium_photo-1681566925312-948c8a896b37?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="alt"
        className="w-full h-auto rounded-2xl"
        width={`${100}`}
        height={`${100}`}
      />
      <div className="w-full flex flex-col rounded-2xl">
        <h3 className="text-white text-[16px] font-semibold">
          {title ?? "Titre du projet"}
        </h3>
        <h4 className="text-white text-sm">
          {type ??
            "Un projet est — en management d'entreprise — un ensemble finalisé d’activités et d’actions entreprises par une « équipe projet » sous la responsabilité d'un chef de projet dans le but de répondre à un besoin défini par un contrat dans des délais fixés et dans la limite ."}
        </h4>
        <button className="underline text-xs text-blue-600">Détails</button>
      </div>
    </div>
  );
}
