import { OrbitingCirclesDemo } from "./OrbitingCirclesDemo";
import BoxReveal from "./ui/box-reveal";
import NumberTicker from "./ui/number-ticker";
import WordPullUp from "./ui/word-pull-up";

export default function Hero() {
  return (
    <header className="bg-blue-500">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-8 sm:gap-20 lg:flex-row-reverse">
          <div className="max-w-2xl lg:max-w-xl">
            <WordPullUp
              className="mb-4 text-4xl font-bold md:text-6xl text-white text-left"
              words="Get high quality training with 100% placement"
            />
            <p className="mb-6 max-w-lg text-sm sm:text-xl lg:mb-8 text-gray-100 animate-slide-up">
              Get advance certificates from Google, FaceBook and SEMRush. Best
              platform to learn everything.
            </p>
            <div className="mb-6 flex items-stretch md:mb-10 lg:mb-12 animate-slide-up">
              <a
                href="#"
                className="mr-5 rounded-md bg-white text-blue-900 px-8 py-4 text-center font-semibold md:mr-6 lg:mr-8"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="flex flex-row items-center font-bold text-white"
              >
                <p>Browse Courses</p>
              </a>
            </div>
            <BoxReveal boxColor="none">
              <ul className="flex items-center gap-8">
                <li className="text-center">
                  <h3 className="text-2xl text-white font-bold md:text-3xl">
                    <NumberTicker value={2496} />+
                  </h3>
                  <p className="text-sm text-white ">Students Trained</p>
                </li>
                <li className="text-center">
                  <h3 className="text-2xl text-white font-bold md:text-3xl">
                    <NumberTicker value={393} />+
                  </h3>
                  <p className="text-sm text-white">Companies</p>
                </li>
                <li className="text-center">
                  <h3 className="text-2xl text-white font-bold md:text-3xl">
                    <NumberTicker value={512} />+
                  </h3>
                  <p className="text-sm text-white">Getting Jobs Yearly</p>
                </li>
                <li className="text-center">
                  <h3 className="text-2xl text-white font-bold md:text-3xl">
                    <NumberTicker value={98} />%
                  </h3>
                  <p className="text-sm text-white">Success Rate</p>
                </li>
              </ul>
            </BoxReveal>
          </div>
          <div className="relative h-full w-full">
            <div className="h-full w-full max-w-2xl bg-yellow-400 rounded-md relative overflow-clip z-10">
              <OrbitingCirclesDemo />
              <div className="flex justify-center">
                <img
                  src="/images/student-tp-min.png"
                  alt="student-tp-min"
                  className="absolute top-0 h-full mx-auto animate-slide-up"
                />
              </div>
            </div>

            <div className="hidden md:block w-48 h-48 absolute -top-12 -left-12 bg-[radial-gradient(circle,_theme(colors.orange.500)_1.5px,_transparent_1.5px)] bg-[length:16px_16px]"></div>
            <div className="hidden md:block w-48 h-48 absolute -bottom-12 -right-12 bg-[radial-gradient(circle,_theme(colors.orange.500)_1.5px,_transparent_1.5px)] bg-[length:16px_16px]"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
