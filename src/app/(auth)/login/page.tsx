import { Link }      from "@components/Link";
import { LoginForm } from "./LoginForm";

const Login = () => {
  return (
    <div className="w-full h-full flex flex-col items-center px-4 py-8">
      <div className="w-full flex-1 flex flex-col justify-start">
        <p className="text-xs text-gray-400 tracking-[0.5em] text-center">NAZAR KHARIN</p>
      </div>
      <div className="w-full max-w-[20em] flex flex-col gap-16">
        <h1 className="font-bold text-4xl text-center">Login</h1>
        <LoginForm />
      </div>
      <div className="w-full flex-1 flex flex-col justify-end">
        <p className="text-md text-gray-400 text-center">
          {"If you're not admin, please head back to the "}
          <Link href="/">home page</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;