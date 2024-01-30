import RegisterForm from "@/app/components/Login/RegisterForm";

export default function Home() {
  return (
    <div className="p-3 flex flex-col">
      <h1>Registro de usuario</h1>
      <RegisterForm />
    </div>
  );
}
