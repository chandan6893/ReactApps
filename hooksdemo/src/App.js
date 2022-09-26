// import { CountClass } from "./components/CountClass";
import { CountHooks } from "./components/CountHooks";
import { CounterHooks } from "./components/CounterHooks"
import { StateWithObject } from "./components/StateWithObject";
import { StateWithArray } from "./components/StateWithArray"
// import { TitleChange } from "./components/TitleChange";

export function App() {
  return (
    <>
    {/* <CountClass /> */}
    <CountHooks />
    <CounterHooks />
    <StateWithObject />
    <StateWithArray />
    {/* <TitleChange /> */}
    </>
  )
}

export default App;
