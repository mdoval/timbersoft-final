export function SpinnerLoading() {
  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg">
      <div className="h-full text-center align-middle">
        <span className="loading loading-ring loading-lg w-1/3 mt-20"></span>
        <h1 className="text-3xl font-bold">CARGANDO</h1>
      </div>
    </div>
  );
}
