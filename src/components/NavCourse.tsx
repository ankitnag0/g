import Link from "next/link";
import React from "react";

type NavCourseProps = {
  href: string;
  title: string;
  imageSrc?: string;
  description: string;
};

export default function NavCourse({
  href,
  title,
  imageSrc,
  description,
}: NavCourseProps) {
  return (
    <Link
      className="group flex grow flex-col rounded-lg px-5 py-5 basis-1/2 xl:px-8 transition-shadow duration-300 hover:shadow-lg"
      href={href}
    >
      {/* ICON */}
      <div className="relative transition-transform duration-300 group-hover:scale-110">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            height={40}
            width={40}
            className="transition-transform duration-300 group-hover:-rotate-12"
          />
        ) : (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:rotate-12"
          >
            <rect width="40" height="40" fill="#C4C4C4" />
            <path
              d="M18.4688 18.6875C18.8312 18.6875 19.125 18.3937 19.125 18.0312C19.125 17.6688 18.8312 17.375 18.4688 17.375C18.1063 17.375 17.8125 17.6688 17.8125 18.0312C17.8125 18.3937 18.1063 18.6875 18.4688 18.6875Z"
              fill="black"
            />
            <path
              d="M24.3751 14.75H15.6251C15.3931 14.7503 15.1707 14.8425 15.0066 15.0066C14.8426 15.1706 14.7503 15.393 14.7501 15.625V22.6236L14.75 22.6253L14.7501 24.375C14.7503 24.607 14.8426 24.8294 15.0066 24.9934C15.1707 25.1575 15.3931 25.2497 15.6251 25.25H24.3751C24.607 25.2497 24.8294 25.1575 24.9935 24.9934C25.1575 24.8294 25.2498 24.607 25.2501 24.375V15.625C25.2498 15.393 25.1575 15.1706 24.9935 15.0066C24.8294 14.8425 24.607 14.7503 24.3751 14.75ZM22.8063 19.125C22.642 18.9612 22.4195 18.8691 22.1875 18.8691C21.9555 18.8691 21.733 18.9612 21.5688 19.125L19.1251 21.5688L17.9938 20.4375C17.8295 20.2737 17.607 20.1817 17.375 20.1817C17.1431 20.1817 16.9205 20.2737 16.7563 20.4375L15.6251 21.5687V15.625H24.3751L24.3754 20.6941L22.8063 19.125Z"
              fill="black"
            />
          </svg>
        )}
      </div>
      {/* TEXT */}
      <h2 className="font-inter mb-1 mt-5 text-lg font-medium text-black transition-transform duration-300 group-hover:translate-y-[-2px]">
        {title}
      </h2>
      <p className="font-inter max-w-64 text-sm text-gray-500 lg:max-w-sm transition-transform duration-300 group-hover:translate-y-[-1px]">
        {description}
      </p>
    </Link>
  );
}
