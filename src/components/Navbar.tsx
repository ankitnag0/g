"use client";

import { useState } from "react";
import NavCourse from "./NavCourse";

const courses = [
  {
    imageSrc: "/svgs/advanced-digital-marketing.svg",
    title: "Advanced Digital Marketing",
    url: "/courses/advanced-digital-marketing",
    description:
      "Master advanced strategies and tools to elevate your digital marketing skills and drive online growth.",
  },
  {
    imageSrc: "/svgs/search-engine-marketing.svg",
    title: "Search Engine Marketing",
    url: "/courses/search-engine-marketing",
    description:
      "Learn effective paid search campaigns to boost visibility and drive traffic using Google Ads and Bing Ads.",
  },
  {
    imageSrc: "/svgs/search-engine-optimization.svg",
    title: "Search Engine Optimization",
    url: "/courses/search-engine-optimization",
    description:
      "Optimize websites for better rankings on search engines, driving organic traffic and improving visibility.",
  },
  {
    imageSrc: "/svgs/social-media-marketing.svg",
    title: "Social Media Marketing",
    url: "/courses/social-media-marketing",
    description:
      "Develop strategies for creating impactful social media campaigns on platforms like Facebook, Instagram, and LinkedIn.",
  },
  {
    imageSrc: "/svgs/affiliate-marketing.svg",
    title: "Affiliate Marketing",
    url: "/courses/affiliate-marketing",
    description:
      "Learn to promote products through affiliates, building a network to generate passive income streams.",
  },
  {
    imageSrc: "/svgs/e-mail-marketing.svg",
    title: "E-mail Marketing",
    url: "/courses/e-mail-marketing",
    description:
      "Create effective email campaigns to nurture leads, build relationships, and drive conversions.",
  },
  {
    imageSrc: "/svgs/google-analytics.svg",
    title: "Google Analytics",
    url: "/courses/google-analytics",
    description:
      "Master Google Analytics to track website performance, analyze data, and make informed marketing decisions.",
  },
  {
    imageSrc: "/svgs/content-marketing.svg",
    title: "Content Marketing",
    url: "/courses/content-marketing",
    description:
      "Learn to create valuable content that engages audiences and builds brand authority across digital platforms.",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOne, setMenuOne] = useState(false);

  return (
    <section className="md:sticky lg:top-0 bg-white z-50 shadow-sm">
      {/* wrapper */}
      <nav className="font-inter mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0">
        {/* nav-wrapper */}
        <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
          {/* logo */}
          <a href="#">
            <img src="/images/godig-logo.png" alt="godig-logo" />
          </a>

          {/* center links */}
          <div
            className={`mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 ${isOpen ? "" : "hidden"}`}
          >
            {/* courses-wrapper */}
            <div className="relative flex flex-col">
              {/* courses button*/}
              <button
                onClick={() => setMenuOne(!menuOne)}
                className={`flex flex-row rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800 ${menuOne ? "text-gray-800 lg:border lg:border-gray-600 lg:bg-gray-50" : "text-black lg:border lg:border-white"}`}
              >
                Courses
                <svg
                  className={`w-6 h-6 fill-current transition-transform duration-300 ${menuOne ? "rotate-180" : "rotate-0"}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
                </svg>
              </button>

              {/* courses-list */}
              {menuOne && (
                <div className="z-50 flex w-full flex-col rounded-lg px-5 py-5 lg:absolute lg:top-20 lg:w-[800px] bg-gray-100 lg:flex-row lg:flex-wrap lg:py-7 xl:w-[950px]">
                  {courses.map((course) => (
                    <NavCourse
                      title={course.title}
                      description={course.description}
                      imageSrc={course.imageSrc}
                      href={course.url}
                      key={course.title}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* the 2 links */}
            <a
              href="#"
              className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
            >
              Placements
            </a>
            <a
              href="#"
              className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-gray-800"
            >
              Testimonials
            </a>
          </div>

          {/* contact us button */}
          <div
            className={`flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0 ${isOpen ? "" : "hidden"}`}
          >
            <a
              href="#"
              className="mr-5 rounded-md bg-blue-900 text-white px-8 py-4 text-center font-semibold md:mr-6 lg:mr-8"
            >
              Contact Us
            </a>
          </div>

          <button
            className="absolute right-5 lg:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 12H20.25"
                stroke="#160042"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3.75 6H20.25"
                stroke="#160042"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3.75 18H20.25"
                stroke="#160042"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </section>
  );
}
