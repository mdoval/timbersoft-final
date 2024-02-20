"use client";

import React from "react";

const PaqueteFormMobile = () => {
  return (
    <div className="w-full flex flex-col items-center bg-blue-200">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Espesor</span>
        </div>
        <input
          type="numeric"
          placeholder="Ingrese aqui"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Ancho</span>
        </div>
        <input
          type="numeric"
          placeholder="Ingrese aqui"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Largo</span>
        </div>
        <input
          type="numeric"
          placeholder="Ingrese aqui"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Cantidad</span>
        </div>
        <input
          type="numeric"
          placeholder="Ingrese aqui"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
    </div>
  );
};

export default PaqueteFormMobile;
