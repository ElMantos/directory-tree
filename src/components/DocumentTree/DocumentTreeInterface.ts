import { CSSProperties } from "react";

export interface DataInterface {
  id: string;
  name: string;
  childNodes: Array<DataInterface>;
}

export default interface DocumentTreeInterface {
  data: Array<DataInterface>;
  id?: string;
  style?: CSSProperties;
  setData: (name: string, id: string) => void;
}
