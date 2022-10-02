import React, { useContext } from "react";
import { NameContext, AgeContext } from "../App";
export function ComponentC() {
  const name = useContext(NameContext);
  const age = useContext(AgeContext);
  return <div>ComponentC: {name} and age is {age}</div>;
}
