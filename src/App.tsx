import React, { useState } from "react";
import "./App.css";

import { DocumentTree } from "./components";
import { DataInterface } from "./components/DocumentTree/DocumentTreeInterface";

import { pushToTree } from "./utils";

const INITIAL_STATE: Array<DataInterface> = [
  {
    id: "1",
    name: "Lorem",
    childNodes: [
      { id: "11", name: "Lorem", childNodes: [] },
      { id: "21", name: "Ipsum", childNodes: [] },
      { id: "31", name: "Dolor", childNodes: [] },
    ],
  },
  {
    id: "1123",
    name: "Ipsum",
    childNodes: [
      { id: "12", name: "Lorem", childNodes: [] },
      { id: "22", name: "Ipsum", childNodes: [] },
      { id: "32", name: "Dolor", childNodes: [] },
    ],
  },
  { id: "3", name: "Dolor", childNodes: [] },
];
function App() {
  const [dataTree, setDataTree] = useState<Array<DataInterface>>(INITIAL_STATE);
  return (
    <div className="App">
      <DocumentTree
        setData={(name: string, id: string) => {
          setDataTree((state) => {
            return pushToTree(state, id, name);
          });
        }}
        data={dataTree}
      />
    </div>
  );
}

export default App;
