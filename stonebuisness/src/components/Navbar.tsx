import { Link, NavLink } from "react-router-dom";
import { TextAlignRightIcon } from "@radix-ui/react-icons";
import MaxWithWrapper from "./MaxWithWrapper";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import Logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="border-b shadow-md">
      <MaxWithWrapper className="py-4 ">
        <div className="flex items-center justify-between">
          {/** Logo */}
          <div className="px-4 md:px-0 flex items-center gap-2">
            <img src={Logo} alt="logo" className="rounded-full w-16 h-16" />
            <h2 className=" uppercase font-ubuntu text-xl font-semibold">
              jahanara enterprise
            </h2>
          </div>
          {/** Nav Menu Desktop */}
          <div className="items-center hidden md:flex gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 rounded transition-all duration-500 ease-in-out bg-primary text-white font-medium"
                  : "px-4 py-2 rounded transition-all duration-500 ease-in-out hover:bg-primary hover:text-white font-medium"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 rounded transition-all duration-500 ease-in-out bg-primary text-white font-medium"
                  : "px-4 py-2 rounded transition-all duration-500 ease-in-out hover:bg-primary hover:text-white font-medium"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/management"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 rounded transition-all duration-500 ease-in-out bg-primary text-white font-medium"
                  : "px-4 py-2 rounded transition-all duration-500 ease-in-out hover:bg-primary hover:text-white font-medium"
              }
            >
              Management
            </NavLink>
            <NavLink
              to="/business"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 rounded transition-all duration-500 ease-in-out bg-primary text-white font-medium"
                  : "px-4 py-2 rounded transition-all duration-500 ease-in-out hover:bg-primary hover:text-white font-medium"
              }
            >
              Business & Products
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "px-4 py-2 rounded transition-all duration-500 ease-in-out bg-primary text-white font-medium"
                  : "px-4 py-2 rounded transition-all duration-500 ease-in-out hover:bg-primary hover:text-white font-medium"
              }
            >
              Contact
            </NavLink>
          </div>
          {/** Nav Menu Mobile */}
          <div className="block md:hidden">
            <Sheet>
              <SheetTrigger>
                <TextAlignRightIcon className="w-7 h-7 text-primary" />
              </SheetTrigger>
              <SheetContent>
                <SheetTitle>
                  <div className="px-4 md:px-0">
                    <img
                      src={Logo}
                      alt="logo"
                      className="rounded-full w-16 h-16 shadow-lg"
                    />
                  </div>
                </SheetTitle>
                <div className="flex flex-col items-start mt-16 gap-8 w-full">
                  <Link
                    to="/"
                    className={
                      "px-4 py-2 rounded w-full transition-all duration-500 ease-in-out hover:bg-primary hover:text-white font-medium"
                    }
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className={
                      "px-4 py-2 w-full rounded transition-all duration-500 ease-in-out hover:bg-primary hover:text-white font-medium"
                    }
                  >
                    About
                  </Link>
                  <Link
                    to="/management"
                    className={
                      "px-4 py-2 rounded w-full transition-all duration-500 ease-in-out hover:bg-primary hover:text-white font-medium"
                    }
                  >
                    Management
                  </Link>
                  <Link
                    to="/business"
                    className={
                      "px-4 py-2 rounded transition-all duration-500 ease-in-out hover:bg-primary hover:text-white font-medium"
                    }
                  >
                    Business & Products
                  </Link>
                  <Link
                    to="/contact"
                    className={
                      "px-4 py-2 w-full rounded transition-all duration-500 ease-in-out hover:bg-primary hover:text-white font-medium"
                    }
                  >
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </MaxWithWrapper>
    </nav>
  );
};
