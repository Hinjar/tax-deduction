import React from "react";

import styles from "./Tag.module.scss";
import clsx from "clsx";

interface TagProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const Tag: React.FC<TagProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.tag, isActive && styles.tagActive)}
    >
      {label}
    </button>
  );
};
