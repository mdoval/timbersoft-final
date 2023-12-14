import { FC } from "react";

interface ErrorMessageSpanProps {
    hidden: boolean    
    mensaje: string
}

const ErrorMessageSpan: FC<ErrorMessageSpanProps> = ({mensaje, hidden}) => {
  return (
    <div className={`label ${hidden ? "hidden": ""}`}>
      <span className="label-text-alt text-red-600 font-bold">
        {mensaje}
      </span>
    </div>
  );
};

export default ErrorMessageSpan
