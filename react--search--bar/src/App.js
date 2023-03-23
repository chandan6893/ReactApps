import './App.css';
import SearchBar from './components/SearchBar';
import { SuggestionList } from './components/SuggestionList';


function App() {
  return (
    <div className="App">
      <SearchBar />
      <SuggestionList /> 
    </div>
  );
}

export default App;
