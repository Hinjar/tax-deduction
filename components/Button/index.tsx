import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

interface ButtonProps {
  outline?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  outline,
  onClick,
  children,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(styles.button, outline && styles.button__outline)}
    >
      {children}
    </button>
  );
};
