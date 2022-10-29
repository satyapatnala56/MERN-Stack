// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Seller from './components/Seller';
// import Signin from './components/SignIn';
// import Register from './components/Register';
import Home from './components/Home';
// import { Backdiv } from './stlying/styles';
import User from './components/user';
import Profile from './components/Profile';
import Favorite from './components/Favourites';
import MyArts from './components/MyArts';
import Settings from './components/Settings';
// import Error from './components/Error'

function App() {
  return (
    // <Backdiv>

     <Router>
      <Routes>
        <Route path='seller' element={<Seller />}/>
        {/* <Route path='login' element={<Signin />}/> */}
        {/* <Route path='register' element={<Register />}/> */}
        <Route path='profile' element={<Profile />} />
        <Route path='/' element={<Home />} exact/>
        <Route path='user' element={<User />} />
        <Route path='save' element={<Favorite />} />
        <Route path='myarts' element={<MyArts />} />
        <Route path='settings' element={<Settings />} />
      </Routes>
     </Router>
    // </Backdiv>
  );
}

export default App;
