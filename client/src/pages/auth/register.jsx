import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { registerFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus2 } from "lucide-react";
const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
        navigate("/auth/login");
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  console.log(formData);

  return (
    <div className="mx-auto w-full max-w-md space-y-8 bg-white dark:bg-background rounded-2xl shadow-xl p-8 sm:p-10">
    <div className="text-center">
      <div className="flex justify-center items-center mb-4">
        <UserPlus2 className="h-10 w-10 text-cyan-500" />
      </div>
      <h1 className="text-3xl font-extrabold text-cyan-500 tracking-tight">
        Create New Account
      </h1>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Already have an account?
        <Link
          className="ml-2 text-cyan-600 hover:text-cyan-400 hover:underline transition"
          to="/auth/login"
        >
          Login
        </Link>
      </p>
    </div>

    <CommonForm
      formControls={registerFormControls}
      buttonText="Sign Up"
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
    />
  </div>
  );
}

export default AuthRegister;
