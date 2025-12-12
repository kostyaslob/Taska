import css from "./Button.module.css";
import clsx from "clsx";

interface ButtonProps {
    type?: "search" | "reset";
    text: string;
}

export default function Button({ type, text }: ButtonProps) {
    return (
        <button className={clsx(css.default, type && css[type])}>{text}</button>
    )
}