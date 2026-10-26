
import { useState, useEffect, useRef, RefObject } from 'react';

const useIntersectionObserver = <T extends HTMLElement,>(): [RefObject<T | null>, boolean] => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    if (!("IntersectionObserver" in window)) {
      setIntersecting(true);
      return;
    }

    const activationRatio = Math.min(0.16, 160 / Math.max(currentRef.getBoundingClientRect().height, 1));
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= activationRatio) {
          setIntersecting(true);
        } else if (!entry.isIntersecting) {
          setIntersecting(false);
        }
      },
      {
        rootMargin: '-64px 0px 0px 0px',
        threshold: [0, activationRatio],
      }
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, []);

  return [ref, isIntersecting];
};

export default useIntersectionObserver;
