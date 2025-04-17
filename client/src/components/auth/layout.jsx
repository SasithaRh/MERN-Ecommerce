import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Welcome Panel */}
      <div className="hidden lg:flex items-center justify-center w-1/2 bg-gradient-to-br from-blue-600 to-indigo-800 px-12">
        <div className="max-w-md text-center text-white space-y-6">
          <img
            src="../../assets/react.svg"
            alt="Welcome Illustration"
            className="w-3/4 mx-auto mb-6"
          />
          <h1 className="text-4xl font-extrabold tracking-tight leading-tight">
            Welcome to E-Commerce Shopping
          </h1>
          <p className="text-lg text-blue-100">
            Discover amazing products and enjoy smooth shopping experiences.
          </p>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex flex-1 items-center justify-center bg-gray-100 dark:bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-white dark:bg-background shadow-xl rounded-2xl p-8 sm:p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
