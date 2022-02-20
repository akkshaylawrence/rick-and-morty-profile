import { RefObject, useEffect } from "react";

function useOnClickOutside(
  ref: RefObject<HTMLDivElement>,
  handler: () => void
): void {
  useEffect(
    () => {
      const listener = (event: MouseEvent | null): void => {
        if (!ref.current || ref.current.contains(event?.target as Node)) {
          return;
        }
        handler();
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener as never);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener as never);
      };
    },
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}

export default useOnClickOutside;
