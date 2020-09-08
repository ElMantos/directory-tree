import React, { FC } from "react";

import { useNodeInsertion } from "../../hooks";

import "./style.scss";

interface Props {
  name: string;
  hasChildren: boolean;
  setData: (nodeName: string) => void;
}

const DocumentNode: FC<Props> = ({ name, hasChildren, setData }) => {
  const [nodeName, setNodeName] = useNodeInsertion(setData);
  return (
    <div className="document_node">
      <strong>{name}</strong>
      {!hasChildren && (
        <input
          type="text"
          value={nodeName}
          placeholder="Insert deeper layer"
          onChange={(e) => {
            setNodeName(e.target.value);
          }}
        />
      )}
    </div>
  );
};

export default DocumentNode;
