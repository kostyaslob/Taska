import css from "./Button.module.css";
import clsx from "clsx";

interface ButtonProps {
  type?: "search" | "reset";
  text: string;
  onClick?: () => void;
}

export default function Button({ type, text, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={clsx(css.default, type && css[type])}>
      {text}
    </button>
  );
}
