import MaxWithWrapper from "./MaxWithWrapper";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Logo from "../assets/logo.png";
export default function Footer() {
  return (
    <footer className="bg-black p-16">
      <MaxWithWrapper>
        <div className="flex justify-between items-center flex-wrap gap-16">
          <div className="text-white order-2 md:order-1 flex flex-col gap-6 items-start ">
            <h3 className="text-2xl font-bold">Sign up for our Newsletter</h3>
            <p className="text-lg font-medium">
              Stay tuned: news, inspirations and tips.
            </p>
            <div className="my-6">
              <Input
                placeholder="Email..."
                className="py-4 px-4 rounded bg-white text-black"
              />
            </div>
            <Button
              size={"lg"}
              className="rounded text-xl uppercase text-white"
            >
              Subscribe
            </Button>
          </div>
          <div className="text-white order-1 md:order-2">
            <div className="">
              <img
                src={Logo}
                alt="logo"
                className="rounded-full w-36 h-36 shadow-lg"
              />
            </div>
          </div>
        </div>
      </MaxWithWrapper>
    </footer>
  );
}
