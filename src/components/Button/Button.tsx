import { container, background } from "./Button.css";

export interface ButtonProps {
  variant: "primary" | "secondary";
  label: string;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${container} ${background[props.variant]}`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};
