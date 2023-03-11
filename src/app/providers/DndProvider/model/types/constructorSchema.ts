interface ElementsData {
  type: string;
  theme: string;
  text: string;
}

interface ElementStructure {
  elem: ElementsData[];
}

export interface ConstructorSchema {
  value: ElementStructure[];
  dropped: boolean;
}
