import BotonLogin from "@/app/components/BotonLogin";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://madera-sostenible.com/wp-content/uploads/2018/06/EBAKI_Parque_Madera_1-e1529834430271-980x600.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Timbersoft</h1>
            <p className="mb-5">
              La solucion para la gestion de tu aserradero
            </p>
            <BotonLogin />
          </div>
        </div>
      </div>
    </div>
  );
}
