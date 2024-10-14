export default function Testimonial() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
          {/* Image */}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
            alt=""
            className="inline-block h-full w-full max-w-xl object-cover"
          />
          {/* Content */}
          <div className="sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9406b0e6cf62_placeholder-logo.svg"
              alt=""
              className="mb-4 inline-block"
            />
            <p className="mb-6 max-w-md text-gray-500 md:mb-10 lg:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, “Lorem ipsum dolor sit
              amet, consectetur adipiscing elit ut aliquam, purus sit amet
              luctus venenatis, lectus magna fringilla urna, porttitor rhoncus
              dolor purus non enim.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim.”
            </p>
            <p className="font-bold">John Robert</p>
            <p className="text-sm text-gray-500">Senior Webflow Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
