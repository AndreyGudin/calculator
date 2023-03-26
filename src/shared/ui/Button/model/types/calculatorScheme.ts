export enum Operation {
  PLUS = '+',
  MINUS = '-',
  MULTIPLICATION = '*',
  DIVISION = '/'
}

export interface CalculatorScheme {
  value: string | null;
  result: string | null;
  operation: Operation | null;
}
