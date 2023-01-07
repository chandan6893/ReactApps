const reducer = (state,action) =>{
  switch(action.type){
    case "SET__LOADING" :
      return {
        ...state,
        // if we don't get data ,loading state would be true
        isLoading : true,
      }
      // if we got the data then isLoading will be false
    case "GET__NEWS" :
      return {
        ...state,
        isLoading:false,
        hits:action.payload.hits,
        nbPages:action.payload.nbPages,

      }
  }
};
export default reducer;
