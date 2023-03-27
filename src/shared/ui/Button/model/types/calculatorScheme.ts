export enum Operation {
  PLUS = '+',
  MINUS = '-',
  MULTIPLICATION = 'X',
  DIVISION = '/'
}

export interface CalculatorScheme {
  value1: string | null;
  value2: string | null;
  result: string | null;
  operation: Operation | null;
}
