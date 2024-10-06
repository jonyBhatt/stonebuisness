import MaxWithWrapper from "../MaxWithWrapper";

export const Sustain = () => {
  return (
    <div className="sustain relative">
      <div className="absolute h-full w-full transparentBg">
        <MaxWithWrapper className="flex items-center justify-center">
          <div className="flex flex-col gap-4 items-center">
            <h3 className="font-medium text-2xl text-green-600 uppercase">
              Sustainable Stone
            </h3>
            <h2 className="text-3xl md:text-6xl font-bold text-center text-white mb-4">
              Resources about Natural <br /> Stone & Sustainability
            </h2>
            <hr className="h-3 w-1/2 bg-green-500 border-none" />
          </div>
        </MaxWithWrapper>
      </div>
    </div>
  );
};
