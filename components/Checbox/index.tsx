import React from "react";

import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  label: string | React.ReactNode;
  id: string;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, id, disabled }) => {
  return (
    <div className={styles.formCheckbox}>
      <input disabled={disabled} type="checkbox" id={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
