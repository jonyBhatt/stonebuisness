import Logo from "@/assets/logo.png";
import { LoginForm } from "@/components/Auth/LoginForm";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="grid grid-cols-2 place-items-center gap-8 lg:gap-0 w-full">
      <div className="flex flex-col items-center justify-center h-svh bg-gray-800 w-full">
        <div className="pb-4">
          <img src={Logo} alt="Logo" className="w-16 h-16 rounded-full" />
        </div>
        <div className="flex flex-col items-center gap-1 w-full">
          <h2 className="font-bold font-ubuntu md:text-5xl text-xl capitalize text-primary">
            Jahanara
          </h2>
          <p className="font-semibold font-ubuntu md:text-6xl text-3xl capitalize text-white">
            Enterprise<span className="text-primary">.</span>
          </p>
        </div>
      </div>
      <MaxWithWrapper className="px-0">
        <div className="flex flex-col gap-4 w-full items-start justify-center h-svh ">
          <div className="flex flex-col gap-1">
            <h4 className="font-ubuntu text-3xl">
              <span className="text-primary font-medium ">Welcome</span> Back!
            </h4>
            <p className=" font-ubuntu text-xl">Login to get started</p>
          </div>
          <LoginForm />
          <div className="flex items-center gap-1.5">
            <p className="text-sm font-ubuntu text-gray-500">
              Don't have an account?
            </p>
            <Link to="/register" className="underline font-ubuntu text-sm">
              Register here
            </Link>
          </div>
        </div>
      </MaxWithWrapper>
    </div>
  );
}
