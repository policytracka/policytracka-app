export default interface Cluster {
  name: string;
  value: number;
  children?: Policy[];
}

export interface Policy {
  name: string;
  value: number;
}