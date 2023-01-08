const reducer = (state,action) =>{
  switch (action.type) {
    case "SET__LOADING":
      return {
        ...state,
        // if we don't get data ,loading state would be true
        isLoading: true,
      };
    // if we got the data then isLoading will be false
    case "GET__NEWS":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };

    // remove post
    case "REMOVE__POST":
      return {
        ...state,
        hits: state.hits.filter(
          (currItem, i) => currItem.objectID !== action.payload
        ),
      };

    // search
    case "SEARCH__QUERY":
      return { ...state, query: action.payload };

    case "PREV__PAGE":
    let pageNum = state.page;
    if(pageNum <= 0){
      pageNum = 0;
    } else{
      pageNum = pageNum - 1;
    } 

      return { ...state,
         page: pageNum  };

    case "NEXT__PAGE":
      let pageNumInc = state.page;
      if(pageNumInc>=state.nbPages-1 ){
          pageNumInc = 0;
      }else{
        pageNumInc = pageNumInc + 1;
      }
      return {...state,
      page: pageNumInc }

    default:
      return state;
  }
};
export default reducer;
