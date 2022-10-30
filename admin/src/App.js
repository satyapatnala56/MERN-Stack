import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Arts from './Components/Arts';
import Users from './Components/Users';
import Auction from './Components/Auction';
import Table from './Components/Table'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} exact />
          <Route path='admin' element={<Admin />}/>
          <Route path='arts' element={<Arts />} />
          <Route path='users' element={<Users />} />
          <Route path='auction' element={<Auction />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
