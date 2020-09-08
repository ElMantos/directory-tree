import { DataInterface } from "../components/DocumentTree/DocumentTreeInterface";

export default function (name: string, childNodes: Array<DataInterface> = []) {
  return {
    id: `${Math.random()}_${new Date()}`,
    name,
    childNodes,
  };
}
