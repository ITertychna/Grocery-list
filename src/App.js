import './App.css';
import image from './bag.webp';
import { GroseryList } from './GroseryList';
import imageMan from './man.webp';

function App() {
  return (
    <div className='app'>
      <div className='container'>
      <img src={image} alt='bag' width='200px'/>
      </div>
      <div className='container'>
      <h1>Grocery List</h1>
      </div>
      <GroseryList/>
      <div className='container'>
      <img src={imageMan} alt='man' width='200px'/>
      </div>
    </div>
  );
}

export default App;
