import { useEffect, useRef, type RefObject } from "react";

export default function useClickOutRef<T extends HTMLElement>(
  callback: () => void
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleClickOutside, { passive: true });

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleClickOutside);
    };
  }, [callback]);

  return ref;
}
