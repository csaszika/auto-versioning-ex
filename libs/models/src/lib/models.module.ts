export const enum EnumExample {
  DEF = 'fr',
  GRE = 'gre',
}

export interface InterfaceExample {
  name: string;
  massacre: number;
}

export type TypeExample = boolean;

export interface NewInterfaceAsFeatureToTriggerVersioning {
  version: string;
  shouldWork: boolean;
  newProp: number;
}
