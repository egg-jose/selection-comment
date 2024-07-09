import React from "react";

function useToggle(initialValue = false) {
  const [isToggled, setIsToggled] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setIsToggled((prev) => !prev);
  }, []);

  return [isToggled, toggle] as const;
}

export default useToggle;
