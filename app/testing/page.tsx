"use client";

import CodigoDeBarras from "../components/Imprimibles/CodigoDeBarras";
import PrintService from "../components/Imprimibles/PrintService";
import Image from "next/image";

export default function TestingPage() {
  return (
    <PrintService>
      <div className="paginaA4 bg-red-200">
        <div className="h-1/3 bg-blue-200 border border-black m-1">
          <div className="w-full h-1/2 bg-blue-200 flex">
            <div className="border border-black p-2 w-60">
              <Image src="/images/kerflogo.jpg" height={100} width={100} alt="logo" />              
            </div>
            <div className="border border-black flex flex-col w-32">
              <div className="h-1/2 p-2 flex justify-center items-center">PRODUCTO</div>
              <div className="h-1/2 p-2 flex justify-center items-center">TAPISE COM</div>              
            </div>
            <div className="border border-black border border-black-solid flex flex-col w-60">
              <div className="h-1/2 p-2 flex justify-center items-center">DESCRIPCION</div>
              <div className="h-1/2 p-2 flex justify-center items-center">Seco como vos</div>                 
            </div>
            <div className="border border-black border border-black-solid flex flex-col w-36">
              <div className="h-1/2 p-2 flex justify-center items-center">CALIDAD</div>
              <div className="h-1/2 p-2 flex justify-center items-center">CU</div>                 
            </div>
            <div className="border border-black border border-black-solid flex flex-col w-60">
              <div className="h-1/2 p-2 flex justify-center items-center">Identificacion de Paquete</div>
              <div className="h-1/2 p-2 flex justify-center items-center"><CodigoDeBarras dato="2024043000001" /></div>                 
            </div>
          </div>

          <div className="w-full h-1/2 bg-yellow-200 flex">
            <div className="border border-black p-2 w-60">
              <div className="h-1/2 flex text-center justify-center items-center">ESCUADRIA</div>
              <div className="h-1/2 flex text-center justify-center items-center">17x8x900</div>
            </div>
            <div className="border border-black flex flex-col w-32">
              <div className="h-1/2 p-2 flex justify-center items-center">CANTIDAD DE PIEZAS</div>
              <div className="h-1/2 p-2 flex justify-center items-center">845</div>                 
            </div>
            <div className="border border-black border border-black-solid flex flex-col w-60">
              <div className="flex h-full">
                <div className="h-full flex text-center justify-center items-center border border-black">VOLUMEN POR PIEZA</div>
                <div>
                  <div className="h-1/2 flex text-center justify-center items-center border border-black">0.77 p2</div>
                  <div className="h-1/2 flex text-center justify-center items-center border border-black">0.0008 m3</div>
                </div>
              </div>            
            </div>
            <div className="border border-black border border-black-solid flex flex-col w-96">
              <div className="flex h-full">
                <div className="h-full flex text-center justify-center items-center border border-black">VOLUMEN POR PAQUETE</div>
                  <div>
                    <div className="h-1/2 flex text-center justify-center items-center border border-black">0.77 p2</div>
                    <div className="h-1/2 flex text-center justify-center items-center border border-black">0.0008 m3</div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="h-1/3 bg-blue-200 border border-black m-1">div 2</div>
        <div className="h-1/3 bg-blue-200 border border-black m-1">div 3</div>
        <div className="h-1/3 bg-blue-200 border border-black m-1">div 3</div>
        <div className="h-1/3 bg-blue-200 border border-black m-1">div 3</div>
        <div className="h-1/3 bg-blue-200 border border-black m-1">div 3</div>
        <div className="h-1/3 bg-blue-200 border border-black m-1">div 3</div>
      </div>
    </PrintService>
  );
}
