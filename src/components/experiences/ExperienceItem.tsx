"use client";
import React from "react";
import TechnoItem from "./TechnoItem";
import Image from "next/image";
import { ExperienceDTO } from "./ExperienceDTO";
import classNames from "classnames";
import Link from "next/link";

export type ExperienceItemProps = {
  experience: ExperienceDTO;
};

export default function ExperienceItem({
  experience,
}: Readonly<ExperienceItemProps>) {
  const { title, blabla, technologies, url, logo, images } = experience;
  return (
    <div className="flex flex-col relative">
      <h2 className="font-thin text-gray-400 text-lg ">{title ?? "Title"}</h2>

      <div className="font-extralight tracking-wide py-3 text-justify flex gap-4 text-sm">
        <p className={classNames(logo ? "w-3/4 sm:w-full" : "w-full")}>
          {blabla ?? "Bla bla"}
        </p>
      </div>

      <div className="text-xs gap-1 w-full flex flex-wrap">
        {(technologies?.length as number) > 0 ? (
          technologies?.map((item) => <TechnoItem key={item} text={item} />)
        ) : (
          <></>
        )}
      </div>

      <div className="gap-3 w-full flex flex-wrap py-6">
        {logo && (
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image src={logo} alt={"title"} width={100} height={100} />
            <Link href={String(url)} className="text-blue-500" target="_blank">
              {url}
            </Link>
          </div>
        )}
        {(images?.length as number) > 0 ? (
          images?.map((item) => (
            <Link
              href={item?.link ?? "#"}
              key={String(item.url)}
              className="h-200 w-200 flex items-center justify-center"
              target="_blank"
            >
              <Image
                key={String(item?.url)}
                width={100}
                height={100}
                alt={String(item?.url)}
                className="rounded-2xl hover:scale-[3] transition-all duration-500"
                src={"/" + item?.url}
              />
            </Link>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
