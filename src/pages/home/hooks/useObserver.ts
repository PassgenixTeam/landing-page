import { useEffect, useRef, useState } from "react";

export function useObserver() {
  const observerRef = useRef<IntersectionObserver>(
    new IntersectionObserver(
      (entries) => {
        const container = entries[0];
        if (container?.isIntersecting) setIsObserved(true);
        else setIsObserved(false);
      },
      {
        threshold: 0.1,
      }
    )
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const [isObserved, setIsObserved] = useState(false);

  useEffect(() => {
    const container = containerRef.current!;
    observerRef.current.observe(container);

    return () => observerRef.current.unobserve(container);
  }, [isObserved]);

  return { containerRef, isObserved };
}
