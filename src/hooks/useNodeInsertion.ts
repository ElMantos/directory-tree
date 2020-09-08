import { useState, useEffect } from "react";

const useNodeInsertion = (
  callback: (nodeName: string) => void,
  defaultName: string = ""
) => {
  const [nodeName, setNodeName] = useState<string>(defaultName);

  useEffect(() => {
    if (nodeName.length === 5) {
      callback(nodeName);
      setNodeName(() => "");
    }
  }, [callback, nodeName]);

  return [nodeName, setNodeName] as const;
};

export default useNodeInsertion;
