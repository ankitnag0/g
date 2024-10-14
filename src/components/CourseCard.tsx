import Link from "next/link";
import React from "react";

type CourseCardProps = {
  iconSrc: string;
  imageSrc: string;
  title: string;
  description: string;
  url: string;
};

export default function CourseCard({
  iconSrc,
  imageSrc,
  title,
  description,
  url,
}: CourseCardProps) {
  return (
    <Link
      href={url}
      className="group flex flex-col gap-4 rounded-md bg-gray-100 px-4 py-8 md:p-4 transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="relative">
        <img
          src={imageSrc}
          alt=""
          className="inline-block h-72 w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute -bottom-7 right-4 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-12">
          <img src={iconSrc} alt="" className="inline-block" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-5">
        <div className="rounded-md bg-gray-100 px-2 py-1.5">
          <p className="text-sm font-semibold text-blue-600">
            GODIGITAL ACADEMY
          </p>
        </div>
        <p className="font-bold">{title}</p>
        {/* Divider */}
        <div className="h-px w-full bg-black"></div>
        <p className="text-sm font-medium text-gray-500 h-16">{description}</p>
      </div>
    </Link>
  );
}
