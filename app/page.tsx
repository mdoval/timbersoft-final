import BotonLogin from "@/app/components/BotonLogin";
import LoginForm from "./components/Login/LoginForm";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 shadow-2xl bg-base-100 w-1/2">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
