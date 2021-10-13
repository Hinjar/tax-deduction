export function calculateTaxDeduction(salary: number): number[] {
  const annualDeduction = salary * 12 * 0.13;
  let deductionMaxValue = 260000;
  const resultMass = [];

  while (deductionMaxValue > 0 && resultMass.length < 4) {
    if (annualDeduction >= deductionMaxValue) {
      resultMass.push(Math.round(deductionMaxValue));
      deductionMaxValue -= deductionMaxValue;
    } else {
      deductionMaxValue -= annualDeduction;
      resultMass.push(Math.round(annualDeduction));
    }
  }

  return resultMass;
}
