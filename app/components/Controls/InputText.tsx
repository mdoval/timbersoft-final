import { ChangeEvent, useState } from "react";

interface InputTextProps {
  value: string;
  title: string;
  placeHolder: string;
  onChange: (newValue: string) => void;
}

const InputText: React.FC<InputTextProps> = ({value, title, onChange, placeHolder}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    // Aquí podrías realizar alguna validación adicional si es necesario
    onChange(newValue);
  };


    return (
    <label className="form-control w-full max-w-md">
      <div className="label">
        <span className="label-text">{title}</span>
      </div>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder={placeHolder}
        className="input input-bordered max-w-md"
      />
      <div className="label hidden">
        <span className="label-text-alt">Error</span>
      </div>
    </label>
  );
};

export default InputText