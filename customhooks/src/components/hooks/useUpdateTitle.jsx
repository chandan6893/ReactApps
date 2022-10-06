import { useEffect } from "react";

export function useUpdateTitle(count){
  useEffect(() => {
    document.title = `count :: ${count}`;
  }, [count]);
}