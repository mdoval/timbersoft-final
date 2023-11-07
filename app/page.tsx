import BotonLogin from "@/app/components/BotonLogin";

export default function Home() {
  return (
    <div className="flex flex-col w-2/5 h-full justify-center items-center m-auto">
      <div className="border-2 flex flex-col items-center p-20 shadow-lg">
        <h1 className="p-5">TimberSoft</h1>
        <BotonLogin />
      </div>
    </div>
  );
}
