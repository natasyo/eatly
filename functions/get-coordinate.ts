import { RangeType } from '@/types';

export function getCoordinate(valueMinMax: RangeType, count: number) {
  const gap = (valueMinMax.max - valueMinMax.min) / count;
  let i = 0;
  const lineNumber = [];
  while (i <= valueMinMax.max) {
    lineNumber.push(i);
    i += gap;
  }
  if (lineNumber[lineNumber.length - 1] < valueMinMax.max) {
    lineNumber.push(valueMinMax.max);
  }
  return lineNumber;
}
