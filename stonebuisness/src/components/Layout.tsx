import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
