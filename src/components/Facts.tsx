export default function Facts() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          Backed up by real data
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg items-center text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut
          aliquam,purus sit amet luctus magna fringilla urna
        </p>
        {/* Content */}
        <div className="mx-auto flex w-full max-w-4xl flex-col flex-wrap justify-between gap-5 px-16 py-8 sm:flex-row md:gap-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm">Blocks</p>
            <h2 className="text-3xl font-bold md:text-6xl">200+</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm">Templates</p>
            <h2 className="text-3xl font-bold md:text-6xl">45</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm">Customers</p>
            <h2 className="text-3xl font-bold md:text-6xl">1500+</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm">Support Tickets</p>
            <h2 className="text-3xl font-bold md:text-6xl">890</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
