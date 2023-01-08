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
          (currItem) => currItem.objectID !== action.payload
        ),
      };

    // search
    case "SEARCH__QUERY":
      return { ...state, query: action.payload ,};
  }
};
export default reducer;
