import { FC } from "react";

export interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps> = ({ label }) => {
  return <button className="text-red-500">{label}</button>;
};

export { Button };
