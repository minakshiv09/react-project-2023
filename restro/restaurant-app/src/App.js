import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import RestaurantList from './component/RestaurantList';
import RestaurantCreate from './component/RestaurantCreate';
import RestaurantSearch from './component/RestaurantSearch';
import RestaurantDetail from './component/RestaurantDetail';
import RestaurantUpdate from './component/RestaurantUpdate';


function App() {
  return (
  
    <div className="App">
        <BrowserRouter>
       
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/list'>List</Link></li>
            <li><Link to='/create'>Create</Link></li>
            <li><Link to='/search'>Search</Link></li>
            <li><Link to='/detail'>Details</Link></li>
            <li><Link to='/update'>Update</Link></li>
          </ul>
          <Routes>
          <Route path='/list' element={<RestaurantList/>}/>
          <Route path='/create' element={<RestaurantCreate/>}/>
          <Route path='/search' element={<RestaurantSearch/>}/>
          <Route path='/detail' element={<RestaurantDetail/>}/>
          <Route path='/update' element={<RestaurantUpdate/>}/>
        </Routes>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
