import React from "react";

import styles from "./TextInput.module.scss";
import clsx from "clsx";

interface TextInputProps {
  value: string | number;
  placeholder?: string;
  onChange: (value: string | number) => void;
  errorText?: string;
  type?: string;
  label?: string;
  disabled?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  placeholder,
  onChange,
  errorText,
  type = "text",
  label,
  disabled,
}) => {
  return (
    <div className={clsx(styles.input, errorText && styles.inputError)}>
      <label>{label}</label>
      <input
        disabled={disabled}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {errorText && <p>{errorText}</p>}
    </div>
  );
};
