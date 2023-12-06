import { ChangeEvent, useState } from "react";

interface InputFechaProps {
  value: string;
  title: string;
  placeHolder: string;
  onChange: (newValue: string) => void;
}

const InputFecha: React.FC<InputFechaProps> = ({title, value, onChange, placeHolder}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    // Aquí podrías realizar alguna validación adicional si es necesario
    onChange(newValue);
  };

  function obtenerFechaFormateada(): string {
    let fechaActual = new Date();
    let año = fechaActual.getFullYear();
    let mes = (fechaActual.getMonth() + 1).toString().padStart(2, "0"); // Agregar cero inicial si es necesario
    let dia = fechaActual.getDate().toString().padStart(2, "0"); // Agregar cero inicial si es necesario
    let fechaFormateada = `${año}-${mes}-${dia}`;
    return fechaFormateada;
  }

  return (
    <label className="form-control w-full max-w-md">
      <div className="label">
        <span className="label-text">{title}</span>
      </div>
      <input
        value={value}
        onChange={handleChange}
        type="date"
        placeholder={placeHolder}
        className="input input-bordered max-w-md"
      />
      <div className="label hidden">
        <span className="label-text-alt">Error</span>
      </div>
    </label>
  );
};

export default InputFecha;
