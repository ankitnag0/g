import React from "react";
import SlideUpDiv from "./SlideUpDiv";

const features = [
  {
    title: "Highly Experienced Trainers",
    imageSrc: "/svgs/features/highly-experienced-trainers.svg",
  },
  {
    title: "Hands-on Live Projects",
    imageSrc: "/svgs/features/hands-on-live-projects.svg",
  },
  {
    title: "Flexible Days and Timings",
    imageSrc: "/svgs/features/flexible-days-and-timings.svg",
  },
  {
    title: "Special Weekend Classes",
    imageSrc: "/svgs/features/special-weekend-classes.svg",
  },
  {
    title: "Lifetime Support",
    imageSrc: "/svgs/features/life-time-support.svg",
  },
  { title: "Affordable Fees", imageSrc: "/svgs/features/affordable-fees.svg" },
  {
    title: "12+ Certifications",
    imageSrc: "/svgs/features/12+-certifications.svg",
  },
  {
    title: "Google Certifications",
    imageSrc: "/svgs/features/google-certifications.svg",
  },
  {
    title: "100% Job Guaranteed",
    imageSrc: "/svgs/features/100-job-guaranteed.svg",
  },
  {
    title: "1 Year Job Support",
    imageSrc: "/svgs/features/1-year-job-support.svg",
  },
];

export default function Features() {
  return (
    <section
      // className="relative bg-cover bg-center h-full flex items-center justify-center"
      // style={{ backgroundImage: "url(/images/stacked-waves-b9.svg)" }}
      className="bg-gradient-to-r from-blue-500 to-blue-900 h-full flex items-center justify-center"
    >
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="flex flex-col items-center">
          {/* Title */}
          <h2 className="text-center text-3xl font-bold md:text-5xl text-white">
            Why Choose GoDigital Academy
          </h2>
          <p className="mb-8 mt-4 text-center text-sm text-gray-200 sm:text-base md:mb-12 lg:mb-16">
            Unlock the full potential of your digital marketing skills with
            GoDigital Academy&apos;s comprehensive courses. Designed for
            beginners and professionals alike, our programs provide in-depth
            knowledge, hands-on experience, and the latest industry insights.
            Learn from experts and get ready to achieve your career goals in the
            dynamic world of digital marketing.
          </p>
          {/* Content */}
          <div className="mb-12 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-16 lg:grid-cols-5 lg:mb-20 lg:gap-6">
            {features.map((feature, index) => (
              <SlideUpDiv
                delay={index * 0.25}
                key={feature.title}
                className="group flex flex-col gap-8 rounded-md bg-gray-100 px-4 py-8 md:p-4 transition-shadow duration-300 hover:shadow-lg"
              >
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  className=" rounded-md object-cover transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12"
                />
                <p className="font-bold text-center">{feature.title}</p>
              </SlideUpDiv>
            ))}
          </div>
          {/* Button */}
          <a
            href="#"
            className="rounded-md bg-white px-6 py-3 font-semibold text-blue-900"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
