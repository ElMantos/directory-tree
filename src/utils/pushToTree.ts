import { DataInterface } from "../components/DocumentTree/DocumentTreeInterface";
import createNode from "./createNode";

const push = (tree: Array<DataInterface>, nodeId: string, name: string) => {
  let data = tree;

  tree.forEach((el, index) => {
    if (el.childNodes.length) {
      data[index].childNodes = pushToTree(el.childNodes, nodeId, name);
    }

    if (el.id === nodeId) {
      data[index].childNodes.push(createNode(name));
    }
  });

  return data;
};

const pushToTree = (
  tree: Array<DataInterface>,
  nodeId: string,
  name: string
) => {
  // This line makes a deep copy of passed object as to avoid mutating the original
  return push(JSON.parse(JSON.stringify(tree)), nodeId, name);
};

export default pushToTree;
