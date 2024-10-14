import CourseCard from "./CourseCard";
import SlideUpDiv from "./SlideUpDiv";

const courses = [
  {
    iconSrc: "/svgs/advanced-digital-marketing.svg",
    imageSrc: "/course-images/advanced-digital-marketing.svg",
    title: "Advanced Digital Marketing",
    url: "/courses/advanced-digital-marketing",
    description:
      "Master advanced strategies and tools to elevate your digital marketing skills and drive online growth.",
  },
  {
    iconSrc: "/svgs/search-engine-marketing.svg",
    imageSrc: "/course-images/search-engine-marketing.svg",
    title: "Search Engine Marketing",
    url: "/courses/search-engine-marketing",
    description:
      "Learn effective paid search campaigns to boost visibility and drive traffic using Google Ads and Bing Ads.",
  },
  {
    iconSrc: "/svgs/search-engine-optimization.svg",
    imageSrc: "/course-images/search-engine-optimization.svg",
    title: "Search Engine Optimization",
    url: "/courses/search-engine-optimization",
    description:
      "Optimize websites for better rankings on search engines, driving organic traffic and improving visibility.",
  },
  {
    iconSrc: "/svgs/social-media-marketing.svg",
    imageSrc: "/course-images/social-media-marketing.svg",
    title: "Social Media Marketing",
    url: "/courses/social-media-marketing",
    description:
      "Develop strategies for creating impactful social media campaigns on platforms like Facebook, Instagram, and LinkedIn.",
  },
  {
    iconSrc: "/svgs/affiliate-marketing.svg",
    imageSrc: "/course-images/affiliate-marketing.svg",
    title: "Affiliate Marketing",
    url: "/courses/affiliate-marketing",
    description:
      "Learn to promote products through affiliates, building a network to generate passive income streams.",
  },
  {
    iconSrc: "/svgs/e-mail-marketing.svg",
    imageSrc: "/course-images/email-marketing.svg",
    title: "E-mail Marketing",
    url: "/courses/e-mail-marketing",
    description:
      "Create effective email campaigns to nurture leads, build relationships, and drive conversions.",
  },
  {
    iconSrc: "/svgs/google-analytics.svg",
    imageSrc: "/course-images/google-analytics.svg",
    title: "Google Analytics",
    url: "/courses/google-analytics",
    description:
      "Master Google Analytics to track website performance, analyze data, and make informed marketing decisions.",
  },
  {
    iconSrc: "/svgs/content-marketing.svg",
    imageSrc: "/course-images/content-marketing.svg",
    title: "Content Marketing",
    url: "/courses/content-marketing",
    description:
      "Learn to create valuable content that engages audiences and builds brand authority across digital platforms.",
  },
];

export default function Cards() {
  return (
    <section
    // className="relative bg-cover bg-center h-full flex items-center justify-center"
    // style={{ backgroundImage: "url(/images/blob-b9w.svg)" }}
    >
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="flex flex-col items-center">
          {/* Title */}
          <h2 className="text-center text-3xl font-bold md:text-5xl">
            GoDigital Academy Courses
          </h2>
          <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
            Unlock the full potential of your digital marketing skills with
            GoDigital Academy&apos;s comprehensive courses. Designed for
            beginners and professionals alike, our programs provide in-depth
            knowledge, hands-on experience, and the latest industry insights.
            Learn from experts and get ready to achieve your career goals in the
            dynamic world of digital marketing.
          </p>
          {/* Content */}
          <div className="mb-12 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-16 md:grid-cols-3 lg:mb-20 lg:gap-6">
            {courses.map((course, index) => (
              <SlideUpDiv delay={index * 0.25} key={course.title}>
                <CourseCard {...course} />
              </SlideUpDiv>
            ))}
          </div>
          {/* Button */}
          <a
            href="#"
            className="rounded-md bg-blue-900 px-6 py-3 font-semibold text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
