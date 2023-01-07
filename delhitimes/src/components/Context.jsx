import React,{ createContext,useContext,useReducer,useEffect } from 'react';
import reducer from './reducer';

let API = "https://hn.algolia.com/api/v1/search_by_date?";
// query = cricket;
const context = createContext();
const initialState = {
    isLoading:true,
    query:"HTML",
    nbPages:0,
    page:0,
    hits:[]
}

function ContextProvider({children}) {
    const [state,dispatch] = useReducer(reducer,initialState);

     
     const getData = async (url) => {

      dispatch({type: "SET__LOADING"});
       try {
         const response = await fetch(url);
         const actualData = await response.json();
         console.log(actualData);
         dispatch({
            type:"GET__NEWS",
            payload:{
                hits:actualData.hits,
                nbPages:actualData.nbPages
            }
         })
       } catch (error) {
         console.log(error);
       }
     };
     useEffect(() => {
       getData(`${API}query=${state.query}&page=${state.page}`);
     }, []);

  return (
    <div>
        <context.Provider value = {{...state}} >
        {children}
        </context.Provider>
    </div>
  )
}

const useGlobalContext = () =>{
    return useContext(context);
}

export default ContextProvider;
export {context,useGlobalContext} ;