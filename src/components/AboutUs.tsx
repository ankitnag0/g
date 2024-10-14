import SlideUpDiv from "@/components/SlideUpDiv";

export default function AboutUs() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        {/* Component */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          {/* Content */}
          <div className="flex flex-col gap-8 lg:w-3/5">
            <SlideUpDiv delay={0.3}>
              <h2 className="mb-8 text-3xl font-bold md:text-5xl text-blue-900">
                About us
              </h2>
            </SlideUpDiv>
            <SlideUpDiv delay={0.5}>
              <p className="text-sm sm:text-base text-slate-700">
                GoDigital Academy is the best ever Digital Marketing Course in
                Hyderabad, Bangalore and Ongole, India with 100% Job Placement
                Guarantee. Where the best training is given by our top-level and
                experienced senior experts of digital marketing with real-time
                exposure to live projects. Here we use advanced and innovative
                techniques in accordance with assignments, projects, and
                internship programs in a creative way you’ll gain the knowledge
                which suits the present future days of digital marketing
              </p>
            </SlideUpDiv>
            <SlideUpDiv delay={0.7}>
              <a
                href="#"
                className="w-36 rounded-md bg-blue-900 px-6 py-3 text-center font-semibold text-white"
              >
                Learn More
              </a>
            </SlideUpDiv>
            {/* Divider */}

            <SlideUpDiv delay={1.0}>
              <div className="my-8 h-px w-full bg-slate-700"></div>
            </SlideUpDiv>
          </div>
          {/* Image */}
          <div className="w-full rounded-md bg-gray-100 max-[991px]:h-[475px] lg:w-2/5"></div>
        </div>
      </div>
    </section>
  );
}
