import BotonLogin from "@/app/components/BotonLogin";
import LoginForm from "./components/Login/LoginForm";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="hero min-h-screen bg-base-200" style={{backgroundImage: 'url(http://localhost:3000/img/background.jpg)'}}>
        <div className="hero-content flex-col lg:flex-row-reverse bg-amber-800 shadow-lg rounded-xl">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">TimberSofrt!</h1>
            <p className="py-6 text-white">
              Ingresa ahora al sistema de gestion de aserraderos
              todos tus datos en un solo lugar
              Sistema de gestion.
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
