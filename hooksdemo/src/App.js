// import { CountClass } from "./components/CountClass";
import { CountHooks } from "./components/CountHooks";
import { CounterHooks } from "./components/CounterHooks"
import { StateWithObject } from "./components/StateWithObject";
import { StateWithArray } from "./components/StateWithArray"

export function App() {
  return (
    <>
    {/* <CountClass /> */}
    <CountHooks />
    <CounterHooks />
    <StateWithObject />
    <StateWithArray />
    </>
  )
}

export default App;
