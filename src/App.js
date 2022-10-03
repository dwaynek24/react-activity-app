
import './App.css';
import AboutPage from './components/AboutPage';
import FavList from './components/FavList';
import SugGenerator from './components/SugGenerator';
import { useEffect, useState } from 'react';
import SugResults from './components/SugResults';
function App() {
  
  const[activity, setActivity] = useState([]);
  const[type, setType] = useState([]);
  const[link, setLink] = useState([]);
  const[price, setPrice] = useState([]);
  const [fav, setFav] =useState([])
  useEffect(() => {
    getActivity();
  }, []);
  
  function getActivity(){
    
    const url ='https://www.boredapi.com/api/activity/'

  
  fetch(url)
    .then(response => response.json())
    .then(response => {
      setActivity(response.activity);
      setType(response.type);
      setLink(response.link);
      setPrice(response.price)
    })
    .catch(console.error);
}

function handleClick(event) {
  event.preventDefault();
  getActivity();
}
function addActivity(event) {
  event.preventDefault();
  setFav(activity)
  console.log('hi')
}
console.log(fav)
  return (
    <div>

      <div className="sugGen"><SugGenerator handleClick ={handleClick}/></div>
      <div className="sugResults"><SugResults activity={activity} type={type} link={link} price={price}/></div>
      <div className="favList"><FavList addActivity={addActivity} fav={fav} /></div>
      <div className="about"><AboutPage /></div>
    </div>

    
    
    
  );}
  

export default App;
