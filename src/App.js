
import './App.css';
import AboutPage from './components/AboutPage';
import FavList from './components/FavList';
import SugGenerator from './components/SugGenerator';

function App() {
  return (
    <div>

      <div className="sugGen"><SugGenerator /></div>
      <div className="favList"><FavList /></div>
      <div className="about"><AboutPage /></div>
    </div>

    
    
    
  );
}

export default App;
