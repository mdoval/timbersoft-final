"use client";

import PrintService from "../components/Imprimibles/PrintService";

export default function TestingPage() {
  return (
    <div>
      Impresion
      <PrintService>
        <div className="print:flex print:flex-col print:h-297mm print:w-210mm print:p-4 print:border print:border-gray-400">
          <div key={0} className="print:mb-4">
            <div className="bg-gray-200 border border-gray-400 p-4 mb-4 h-32">
              Div 1
            </div>
          </div>
          <div key={1} className="print:mb-4">
            <div className="bg-gray-200 border border-gray-400 p-4 mb-4 h-32">
              Div 1
            </div>
          </div>
          <div key={2} className="print:mb-4">
            <div className="bg-gray-200 border border-gray-400 p-4 mb-4 h-32">
              Div 1
            </div>
          </div>
        </div>
      </PrintService>
    </div>
  );
}
