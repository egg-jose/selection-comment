import React from "react";

interface positionType {
  x: number;
  y: number;
  width: number;
  height: number;
}

function useSelectionChange(width: number, height: number) {
  const [state, setState] = React.useState<string>("ready");
  const [selection, setSelection] = React.useState<string | null>("");
  const [position, setPosition] = React.useState({} as positionType);

  React.useEffect(() => {
    const handleSelectStart = () => {
      setState("selecting");
      setSelection(null);
    };
    const handleMouseUp = () => {
      const activeSelection = document.getSelection();
      if (!activeSelection) return;

      const text = activeSelection.toString();
      if (!text) {
        setState("ready");
        setSelection(null);
        return;
      }

      const rect = activeSelection.getRangeAt(0).getBoundingClientRect();

      setSelection(text);
      setPosition({
        x: rect.left + rect.width / 2 - width / 2,
        y: rect.top + window.scrollY - height,
        width: rect.width,
        height: rect.height,
      });
      setState("selected");
    };
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [width, height]);

  return [selection, position, state] as const;
}

export default useSelectionChange;
