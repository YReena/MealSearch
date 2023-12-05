import './App.css';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Search from './components/Search';


function App() {
  return (
    <div className="App">
      <Search/>
      <Favorites/>
      <Meals/>
    </div>
  );
}

export default App;
