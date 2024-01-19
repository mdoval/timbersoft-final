import RemitosList from "@/app/components/DataTable/RemitosList";
import { getRemitos } from "@/utils/getRemitos";
import React from "react";

const RemitosPage = async () => {
  const remitos = await getRemitos();

  return (
    <div className="w-full h-full flex flex-col bg-white shadow-lg p-5 spa">
      <h1>Remitos</h1>
      <br />
      <div className="h-full w-full">
        <RemitosList remitos={remitos} />
      </div>
    </div>
  );
};

export default RemitosPage;
