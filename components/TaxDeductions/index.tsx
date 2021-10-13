import React, { useState } from "react";
import { TextInput } from "../TextInput";
import { Button } from "../Button";
import { Tag } from "../Tag";
import { DecreaseTypeEnum } from "../../ts/consts/decrease-type.enum";
import { Checkbox } from "../Checbox";
import { calculateTaxDeduction } from "../../ts/utils/calculate-tax-deduction";

import styles from "./TaxDeductions.module.scss";

interface TaxDeductionsProps {
  onAddBtnClick: () => void;
}

export const TaxDeductions: React.FC<TaxDeductionsProps> = ({
  onAddBtnClick,
}) => {
  const [salary, setSalary] = useState<string | number>("");

  const [inputError, setError] = useState(null);

  const [decreaseType, serDecreaseType] = useState(DecreaseTypeEnum.PAYMENT);

  const [taxDeductionMass, setTaxDeductionMass] = useState<number[]>([]);

  const onChangeInput = (value: string | number) => {
    setSalary(value);
    if (inputError) {
      setError(null);
    }
  };

  const onCalculateClick = () => {
    if (!String(salary).trim()) {
      setError("Обязательное поле");
      return;
    }
    if (Number(salary) <= 0) {
      setError("Зарплата должна быть больше 0");
      return;
    }
    setTaxDeductionMass(calculateTaxDeduction(Number(salary)));
    setSalary("");
  };
  return (
    <div className={styles.taxDeduction}>
      <div className={styles.topBlock}>
        <div className={styles.title}>Налоговый вычет</div>
        <div className={styles.text}>
          Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
          налогового вычета составляет не более 13% от своего официального
          годового дохода.
        </div>
        <TextInput
          placeholder={"Введите данные"}
          value={salary}
          label={"Ваша зарплата в месяц"}
          errorText={inputError}
          onChange={onChangeInput}
          type="number"
        />
        <button onClick={onCalculateClick} className={styles.calculateBtn}>
          Рассчитать
        </button>
        {taxDeductionMass.length > 0 && (
          <div>
            <div className="text">
              Итого можете внести в качестве досрочных:
            </div>
            {taxDeductionMass.map((e, index) => {
              return (
                <div className={styles.daxCheckBox} key={index}>
                  <Checkbox
                    label={
                      <>
                        <span>
                          {e} рублей{" "}
                          <span className={styles.checkboxRightPartLabel}>
                            {index + 1 !== 2 ? "в" : "во"} {index + 1} год
                          </span>
                        </span>
                      </>
                    }
                    id={String(index + e)}
                  />
                </div>
              );
            })}
          </div>
        )}
        <div className={styles.decreaseBlock}>
          <div className="text">Что уменьшаем?</div>
          <div className={styles.tagContainer}>
            <Tag
              label={"Платёж"}
              isActive={DecreaseTypeEnum.PAYMENT === decreaseType}
              onClick={() => serDecreaseType(DecreaseTypeEnum.PAYMENT)}
            />
            <Tag
              label={"Срок"}
              isActive={DecreaseTypeEnum.TERM === decreaseType}
              onClick={() => serDecreaseType(DecreaseTypeEnum.TERM)}
            />
          </div>
        </div>
      </div>

      <div>
        <Button disabled={!taxDeductionMass.length} onClick={onAddBtnClick}>
          Добавить
        </Button>
      </div>
    </div>
  );
};
