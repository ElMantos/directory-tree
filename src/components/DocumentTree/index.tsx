import React, { FC } from "react";

import DocumentNode from "../DocumentNode";
import DocumentTreeInterface from "./DocumentTreeInterface";

import { useNodeInsertion } from "../../hooks";

import "./style.scss";

const DocumentTree: FC<DocumentTreeInterface> = ({
  id,
  data,
  style,
  setData,
}) => {
  const [nodeName, setNodeName] = useNodeInsertion((name) => {
    if (id) {
      setData(name, id);
    }
  });

  return (
    <div style={style} className="document_tree">
      {id && (
        <input
          className="document_tree_input"
          type="text"
          value={nodeName}
          placeholder={`Insert child node`}
          onChange={(e) => {
            setNodeName(e.target.value);
          }}
        />
      )}
      {data.map(({ id, name, childNodes }, index) => (
        <div key={id}>
          <DocumentNode
            setData={(newNodeName) => {
              setData(newNodeName, id);
            }}
            hasChildren={childNodes.length !== 0}
            name={name}
          />
          {childNodes.length ? (
            <DocumentTree
              id={id}
              setData={setData}
              style={{
                marginLeft: index * 50,
              }}
              data={childNodes}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default DocumentTree;
