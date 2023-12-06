import { ChangeEvent, FC, useState } from "react";

interface InputNumberProps {
  value: number;
  onChange: (newValue: number) => void;
}

const InputNumberTest: FC<InputNumberProps> = ({ value, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    // Aquí podrías realizar alguna validación adicional si es necesario
    onChange(newValue);
  };

  return (
    <label className="form-control w-full max-w-md">
      <div className="label">
        <span className="label-text">Texto de Titulo</span>
      </div>
      <input
        value={value}
        onChange={handleChange}
        type="number"
        placeholder="Ingrese Numero"
        className="input input-bordered max-w-md"
      />
      <div className="label hidden">
        <span className="label-text-alt">Error</span>
      </div>
    </label>
  );
};

export default InputNumberTest;
