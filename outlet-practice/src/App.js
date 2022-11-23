import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Favourite from './pages/favourite/Favourite';
import Wishlist from './pages/wishlist/Wishlist';
import ErrorPage from './pages/error/ErrorPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}>
       <Route path='/favourite' element={<Favourite/>}/>
       <Route path='/wishlist' element={<Wishlist/>}/>
      </Route>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
