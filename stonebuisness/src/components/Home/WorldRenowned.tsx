import { Link } from "react-router-dom";
import MaxWithWrapper from "../MaxWithWrapper";
import { Button } from "../ui/button";

export const WorldRenowned = () => {
  return (
    <div className="py-16">
      <MaxWithWrapper className="flex flex-col gap-8 items-start md:flex-row md:items-center md:justify-center w-full">
        <div className="flex flex-col gap-4 items-center w-full md:items-start md:w-1/2">
          <h3 className="text-4xl text-center md:text-left font-medium">
            Country Wide <br /> Renowned Natural Stone
          </h3>
          <p className="text-lg text-center md:text-left">
            Direct from Sylhet and nearby quarries
          </p>
          <Link to="/business">
            <Button
              className="uppercase text-xl tracking-wide text-white "
              size={"lg"}
            >
              Find your stone
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center items-center md:w-1/2 w-full justify-center ">
          {/** Granite */}
          <div className="granite relative h-screen">
            <div className="absolute top-0 left-0 w-full h-full transparentBg"></div>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <h5 className="text-2xl font-semibold text-white mb-2">
                Boulder
              </h5>
              <hr className="h-2 w-1/2 bg-primary border-none" />
            </div>
          </div>
          {/** Lime */}
          <div className="lime relative h-screen">
            <div className="absolute top-0 left-0 w-full h-full transparentBg"></div>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <h5 className="text-2xl font-semibold text-white mb-2">Lime</h5>
              <hr className="h-2 w-1/2 bg-primary border-none" />
            </div>
          </div>
          {/** Single */}
          <div className="single relative h-screen">
            <div className="absolute top-0 left-0 w-full h-full transparentBg"></div>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <h5 className="text-2xl font-semibold text-white mb-2">Single</h5>
              <hr className="h-2 w-1/2 bg-primary border-none" />
            </div>
          </div>
          {/** Chhatak Sand */}
          <div className="soap relative h-screen">
            <div className="absolute top-0 left-0 w-full h-full transparentBg"></div>
            <div className="absolute bottom-0 left-0 w-full p-4">
              <h5 className="text-2xl font-semibold text-white mb-2">Sand</h5>
              <hr className="h-2 w-1/2 bg-primary border-none" />
            </div>
          </div>
        </div>
      </MaxWithWrapper>
    </div>
  );
};
