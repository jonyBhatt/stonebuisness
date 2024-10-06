import MaxWithWrapper from "../MaxWithWrapper";

export const Hero = () => {
  return (
    <div className="bghero relative">
      <div className="absolute top-0 left-0 w-full h-svh transparentBg ">
        <MaxWithWrapper className="flex items-center justify-center">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-[#FFE000] text-center text-4xl font-bold">
              Jahanara Enterprise
            </h2>
            <h3 className="text-white text-center md:text-4xl lg:text-6xl sm:text-2xl text-lg font-bold">
              Leading the Industry With the <br /> Largest Range of Iconic
              Natural <br />
              Stones
            </h3>
            <hr className="h-4 mt-8 w-48 bg-[#FFE000] text-primary border-none" />
          </div>
        </MaxWithWrapper>
      </div>
    </div>
  );
};
