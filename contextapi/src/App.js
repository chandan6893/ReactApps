
import React,{ useState } from 'react';
import './App.css';

// import { DataFetch } from './components/DataFetch';
// import { DataFetchTwo } from './components/DataFetchTwo';
// import { DataFetchFilter } from "./components/DataFetchFilter";
import { ComponentA } from './components/ComponentA';

export const NameContext = React.createContext();
export const AgeContext = React.createContext();

function App() {

  const [name, setName] = useState("Vasanth");
  const [age, setAge]  = useState(10);
  return (
    <>
      {/* <DataFetch /> */}
      {/* <DataFetchTwo /> */}
      {/* <DataFetchFilter /> */}

      <NameContext.Provider value={name}>
        <AgeContext.Provider value={age}>
          <ComponentA />
        </AgeContext.Provider>
      </NameContext.Provider>
    </>
  );
}

export default App;
