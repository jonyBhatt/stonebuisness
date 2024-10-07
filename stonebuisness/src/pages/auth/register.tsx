import { SignUpForm } from "@/components/Auth/SignUpForm";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className=" py-24">
      <MaxWithWrapper className="flex flex-col  w-full md:px-0 ">
        <h1 className="text-3xl font-ubuntu font-bold mb-8">
          Create your account
        </h1>
        <SignUpForm />
        <div className="flex items-center gap-1.5 mt-4">
          <p className="text-sm font-ubuntu text-gray-500">
            Already have an account?
          </p>
          <Link to="/login" className="underline font-ubuntu text-sm">
            Login here
          </Link>
        </div>
      </MaxWithWrapper>
    </div>
  );
}
