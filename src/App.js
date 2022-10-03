
import './App.css';
import AboutPage from './components/AboutPage';
import FavList from './components/FavList';
import SugGenerator from './components/SugGenerator';
import { useEffect, useState } from 'react';
function App() {
  const[activity, setActivity] = useState([]);
  useEffect(() => {
    getActivity();
  }, []);

  function getActivity(){
    
    const url ='https://www.boredapi.com/api/activity/'

  
  fetch(url)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setActivity(response.data);
    })
    .catch(console.error);
}
function handleClick(event) {
  event.preventDefault();
  getActivity();
}
  return (
    <div>

      <div className="sugGen"><SugGenerator handleClick ={handleClick}/></div>
      <div className="favList"><FavList /></div>
      <div className="about"><AboutPage /></div>
    </div>

    
    
    
  );}
  

export default App;
