"use client";
import React from "react";
import TechnoItem from "./TechnoItem";
import Image from "next/image";
import { ExperienceDTO } from "./ExperienceDTO";
import classNames from "classnames";

export default function ExperienceItem({
  experience,
}: {
  experience: ExperienceDTO;
}) {
  const { title, blabla, technologies, url, logo } = experience;
  return (
    <div className="flex flex-col relative">
      <div className="min-w-4 min-h-4 w-fit rounded-full bg-gray-400 absolute -left-2 top-[5px] border-4 border-x-primary"></div>
      <h2 className="font-semibold text-gray-400 px-5">{title ?? "Title"}</h2>

      <div className="font-extralight tracking-wide p-3 text-justify flex gap-2 text-sm">
        {logo && (
          <div className="flex flex-1 items-center justify-center w-auto">
            <Image src={logo} alt={"title"} width={100} height={100} />
          </div>
        )}
        <p className={classNames(logo ? "w-3/4" : "w-full")}>
          {blabla ?? "Bla bla"}
        </p>
      </div>

      <div className="text-xs gap-1 w-full flex flex-wrap px-3">
        {(technologies?.length as number) > 0 ? (
          technologies?.map((item) => <TechnoItem key={item} text={item} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
