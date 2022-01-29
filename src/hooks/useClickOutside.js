import { useEffect, useRef } from "react";

function useClickOutside(handler) {
  let domElement = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domElement.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domElement;
}

export default useClickOutside;
