export enum Mode {
  RUNTIME = 'runtime',
  CONSTRUCTOR = 'constructor'
}

export interface ModeSchema {
  mode: Mode;
}
