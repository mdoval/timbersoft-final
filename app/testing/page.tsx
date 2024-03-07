"use client";

import CodigoDeBarras from "../components/Imprimibles/CodigoDeBarras";
import PrintService from "../components/Imprimibles/PrintService";
import Image from "next/image";

export default function TestingPage() {
  return (
    <PrintService>
      <div className="paginaA4 bg-red-200">
        <div className="h-1/3 bg-blue-200 border m-1">
          <div className="w-full h-1/2 bg-blue-200 flex">
            <div className="border p-2 w-60">
              <Image src="/images/kerflogo.jpg" height={150} width={150} alt="logo" />              
            </div>
            <div className="border flex flex-col w-32">
              <div className="h-1/2 p-2 flex justify-center items-center">PRODUCTO</div>
              <div className="h-1/2 p-2 flex justify-center items-center">TAPISE COM</div>              
            </div>
            <div className="border border-solid flex flex-col w-80">
              <div className="h-1/2 p-2 flex justify-center items-center">DESCRIPCION</div>
              <div className="h-1/2 p-2 flex justify-center items-center">Seco como vos</div>                 
            </div>
            <div className="border border-solid flex flex-col w-36">
              <div className="h-1/2 p-2 flex justify-center items-center">CALIDAD</div>
              <div className="h-1/2 p-2 flex justify-center items-center">CU</div>                 
            </div>
            <div className="border border-solid flex flex-col w-60">
              <div className="h-1/2 p-2 flex justify-center items-center">Identificacion de Paquete</div>
              <div className="h-1/2 p-2 flex justify-center items-center">Barra|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||</div>                 
            </div>
          </div>

          <div className="w-full h-1/2 bg-yellow-200 flex">
            <div className="border p-2 w-60">
              <div className="h-1/2 flex text-center justify-center items-center">ESCUADRIA</div>
              <div className="h-1/2 flex text-center justify-center items-center">17x8x900</div>
            </div>
            <div className="border flex flex-col w-32">
              <div className="h-1/2 p-2 flex justify-center items-center">CALIDAD</div>
              <div className="h-1/2 p-2 flex justify-center items-center">CU</div>                 
            </div>
            <div className="border border-solid flex flex-col w-80"></div>
            <div className="border border-solid flex flex-col w-36"></div>
            <div className="border border-solid flex flex-col w-60"></div>
          </div>
        </div>

        <div className="h-1/3 bg-blue-200 border m-1">div 2</div>
        <div className="h-1/3 bg-blue-200 border m-1">div 3</div>
        <div className="h-1/3 bg-blue-200 border m-1">div 3</div>
        <div className="h-1/3 bg-blue-200 border m-1">div 3</div>
        <div className="h-1/3 bg-blue-200 border m-1">div 3</div>
        <div className="h-1/3 bg-blue-200 border m-1">div 3</div>
      </div>
    </PrintService>
  );
}
