"use client";

import React, { FC } from "react";

const PrintService = ({ children }: { children: React.ReactNode }) => {
  const handlePrint = () => {
    const printableArea = document.getElementById("printableArea");
    if (printableArea) {
      const printContents = printableArea.innerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    } else {
      console.error("No se encontró el área imprimible.");
    }
  };

  return (
    <div>
      <button onClick={handlePrint} className="btn btn-success">Imprimir</button>
      <div id="printableArea">{children}</div>
    </div>
  );
};

export default PrintService;
