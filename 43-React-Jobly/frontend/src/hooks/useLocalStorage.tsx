import { useState, useEffect } from "react";

/**
 *
 * @param {string} key The key to search for in LS.
 * @param {string | function} defaultValue The value to be assigned to the key. Direct string or a call back fn.
 * @returns state controls in an array. [state, setState]
 */
function useLocalStorage(
  key: string,
  defaultValue: string | null | Function = ""
) {
  // Set the state -> get previous value in LS if any
  const [state, setState] = useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue) {
      return localValue;
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;
