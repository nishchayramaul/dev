
import { Login } from './pages/Login/Login'
import './App.css';
import { Home } from './pages/home/Home';
import { Profile } from './pages/profile/Profile';
import { Sign } from './pages/Signup/Sign';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='*' element ={<h1>404 Not Found</h1>}/>
      <Route path='/' element ={<Login />}/>
      <Route path = '/home' element ={<Home />}/>
      <Route path='/signin' element = {<Sign />}/>
      <Route path='/profile' element ={<Profile />}/>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
