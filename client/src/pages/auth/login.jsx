import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LockKeyhole } from "lucide-react";
const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-8 bg-white dark:bg-background rounded-2xl shadow-xl p-8 sm:p-10">
    <div className="text-center">
      <div className="flex justify-center items-center mb-4">
        <LockKeyhole className="h-10 w-10 text-cyan-500" />
      </div>
      <h1 className="text-3xl font-extrabold text-cyan-500 tracking-tight">
        Sign in to your account
      </h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Don't have an account?
        <Link
          className="ml-2 text-cyan-600 hover:text-cyan-400 hover:underline transition"
          to="/auth/register"
        >
          Register
        </Link>
      </p>
    </div>

    <CommonForm
      formControls={loginFormControls}
      buttonText="Sign In"
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
    />
  </div>
  );
}

export default AuthLogin;
