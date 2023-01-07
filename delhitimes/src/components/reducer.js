const reducer = (state,action) =>{
  switch(action.type){
    case "GET__NEWS" :
      return {
        ...state,
        hits:action.payload.hits,
        nbPages:action.payload.nbPages,

      }
  }
};
export default reducer;
