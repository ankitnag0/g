import {
  FacebookIcon,
  Instagram,
  Linkedin,
  MailIcon,
  PhoneIcon,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

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

export default function Footer() {
  return (
    <footer className="flex flex-col bg-gradient-to-tl from-blue-900 to-blue-500 text-gray-300 py-16 mt-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <div className="px-6">
          <img
            src="/images/godig-logo.png"
            alt="GoDigital Logo"
            className="mb-4 bg-white rounded-md p-2 "
          />
          <p>
            GoDigital academy is the best ever digital marketing institute where
            the best training is given by our top-level and experienced senior
            experts of digital marketing with real-time exposure to live
            projects.
          </p>
          <div className="flex gap-4 mt-4">
            <FacebookIcon />
            <Instagram />
            <Twitter />
            <Linkedin />
            <Youtube />
          </div>
        </div>

        <div className="px-6">
          <h3 className="text-xl font-medium text-white mb-4">CONTACT US</h3>
          <p>
            4th Floor, Service Road, Opp: METRO PARKING, MIG-215, Rd Number 1,
            KPHB Phase I, Kukatpally Housing Board Colony, Kukatpally,
            Hyderabad, Telangana 500072
          </p>
          <ul className="space-y-2">
            <li className="flex gap-2 items-center">
              <PhoneIcon />
              +91 6309488288
            </li>
            <li className="flex gap-2 items-center">
              <PhoneIcon />
              +91 7075988288
            </li>
            <li className="flex gap-2 items-center">
              <MailIcon />
              info@godigitalacademy.in
            </li>
          </ul>
        </div>

        <div className="px-6">
          <h3 className="text-xl font-medium text-white mb-4">
            POPULAR COURSES
          </h3>
          <ul className="grid grid-cols-2 gap-2">
            {courses.map((course) => (
              <li
                key={course.title}
                className="hover:underline hover:text-white "
              >
                <Link href={course.url}>{course.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="">
        <hr className="h-0.5 w-[75%] mx-auto my-8 bg-gray-300 border-0 " />
        <p className="text-center">
          © 2023 GoDigital Academy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
