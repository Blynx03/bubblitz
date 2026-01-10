import React, { useLayoutEffect, useState } from "react"
import type { ContainerRectType } from "../types/ContainerSize";

export const useContainerSize = (ref: React.RefObject<HTMLElement | null>) => {
  const [ container, setContainer ] = useState<ContainerRectType | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const el = ref.current;


    const updateSize = () => {
      const bound = el.getBoundingClientRect();

      setContainer({
        width: bound.width,
        height: bound.height,
        x: bound.x,
        y: bound.y
      });
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(el);
  
    return () => observer.disconnect();
  },[]);

  return container;
}

export default useContainerSize