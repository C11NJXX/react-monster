import { FC } from "react";

interface ButtonShape {
  label: string;
  onClick?: () => void;
  disabled: boolean;
}

const Button: FC<ButtonShape> = ({ label, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
