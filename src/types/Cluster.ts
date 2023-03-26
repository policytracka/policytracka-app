export default interface Cluster {
  // findIndex(arg0: (item: any, i: any) => boolean)?:;
  id?: number;
  name: string;
  value?: number;
  children?: Policy[];
}

export interface Policy {
  id: number;
  name: string;
  value: number;
}