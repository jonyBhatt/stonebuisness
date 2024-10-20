import React from "react";
import {
  DashboardIcon,
  CubeIcon,
  FileTextIcon,
  ExitIcon,
} from "@radix-ui/react-icons";
import Logo from "../assets/logo.png";
export const AdminDashboardLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="lg:w-64 w-fit  bg-gray-900 text-white flex flex-col justify-between transition-all duration-300">
        {/* Logo and Text */}
        <div className="flex flex-col">
          <div className="flex items-center py-4 px-2 gap-2">
            <img src={Logo} alt="logo" className="rounded-full w-16 h-16" />
            <h2 className="hidden md:block uppercase font-ubuntu text-xs font-semibold">
              jahanara enterprise
            </h2>
          </div>

          {/* Sidebar Content */}
          <nav className="flex-1 px-4 py-8 space-y-4">
            <a
              href="#dashboard"
              className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300 ease-in-out"
            >
              <DashboardIcon />
              {/* Text only visible on medium and larger screens */}
              <span className="ml-3 hidden md:inline">Dashboard</span>
            </a>
            <a
              href="#users"
              className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300 ease-in-out"
            >
              <CubeIcon />
              <span className="ml-3 hidden md:inline">Products</span>
            </a>
            <a
              href="#settings"
              className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300 ease-in-out"
            >
              <FileTextIcon />
              <span className="ml-3 hidden md:inline">Orders</span>
            </a>
          </nav>
        </div>

        {/* Logout Button */}
        <div className="p-4">
          <button className="w-full bg-red-600 py-2 rounded-lg hover:bg-red-500 flex items-center justify-center">
            <ExitIcon />
            {/* Text only visible on larger screens */}
            <span className="ml-3 hidden md:inline">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-8">
          Welcome to the Admin Dashboard
        </h1>
        {/* Replace this content with your dynamic content */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p>
            This is your dashboard content area. Add charts, data, or other
            admin information here.
          </p>
        </div>
      </main>
    </div>
  );
};
