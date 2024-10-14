import OrbitingCircles from "@/components/ui/orbiting-circles";

export function OrbitingCirclesDemo() {
  return (
    <div className="z-0 relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg   ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-blue-900 to-blue-900 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
        GoDigital
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={0}
      >
        <Icons.instagram />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={5}
      >
        <Icons.linkedin />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={10}
      >
        <Icons.facebook />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={15}
      >
        <Icons.twitter />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  instagram: () => <img src="/svgs/apps/instagram.svg" alt="Instagram" />,
  facebook: () => <img src="/svgs/apps/facebook.svg" alt="Facebook" />,
  twitter: () => <img src="/svgs/apps/twitter.svg" alt="Twitter" />,
  linkedin: () => <img src="/svgs/apps/linkedin.svg" alt="LinkedIn" />,
};
