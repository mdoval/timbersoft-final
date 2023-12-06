import { ChangeEvent, useState } from "react";

interface InputNumberProps {
  value: number;
  title: string;
  placeHolder: string;
  onChange: (newValue: number) => void;
}

const InputNumber: React.FC<InputNumberProps> = ({ value, title, onChange, placeHolder}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    // Aquí podrías realizar alguna validación adicional si es necesario
    if (!isNaN(newValue)) {
      // Aquí podrías realizar alguna validación adicional si es necesario
      onChange(newValue);
    }
  };

  return (
    <label className="form-control w-full max-w-md">
      <div className="label">
        <span className="label-text">{title}</span>
      </div>
      <input
        value={value}
        onChange={handleChange}
        type="number"
        placeholder={placeHolder}
        className="input input-bordered max-w-md"
      />
      <div className="label hidden">
        <span className="label-text-alt">Error</span>
      </div>
    </label>
  );
};

export default InputNumber;
