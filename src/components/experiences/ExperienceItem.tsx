"use client";
import React from "react";
import TechnoItem from "./TechnoItem";
import Link from "next/link";
import Image from "next/image";
import { ExperienceDTO } from "./ExperienceDTO";

export default function ExperienceItem({
  experience,
}: {
  experience: ExperienceDTO;
}) {
  const { title, blabla, technologies, url, logo } = experience;
  return (
    <div className="flex flex-col relative">
      <div className="min-w-4 min-h-3 w-fit rounded-r-full bg-gray-400 absolute -left-1.5 top-[5px]"></div>
      <h2 className="font-semibold text-gray-400 px-3">{title ?? "Title"}</h2>

      <div className="font-extralight tracking-wide p-3 text-justify flex gap-2">
        {logo && (
          <div className="flex flex-1 items-start justify-center w-full h-[80%] absolute z-0 opacity-10">
            <Image src={logo} alt={"title"} width={200} height={200} />
          </div>
        )}
        <p className="z-10">{blabla ?? "Bla bla"}</p>
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
