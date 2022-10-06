import React, { useState } from "react";
import { useUpdateTitle } from "../components/hooks/useUpdateTitle";

export function DocTitleChangeTwo() {
  const [count, setCount] = useState(222);
 

  useUpdateTitle(count);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        CLICK ::: {count}
      </button>
    </div>
  );
}
