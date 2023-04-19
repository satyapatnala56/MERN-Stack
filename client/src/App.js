import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { UserfnContext } from "./Context/Context";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Seller from "./components/Seller";
import Home from "./components/Home";
import User from "./components/user";
import Profile from "./components/Profile";
import Favorite from "./components/Favourites";
import MyArts from "./components/MyArts";
import Settings from "./components/Settings";
import Public from "./components/Public";
import Auction from "./Auction/Auction";

function App() {
  const authState = useSelector((state) => state.user.isAuth);
  console.log(authState);
  

  return (
      <UserfnContext>
        <Router>
          <Routes>
            <Route
              path="seller"
              element={authState === true ? <Seller /> : <Navigate to="/" />}
            />
            <Route
              path="profile"
              element={authState === true ? <Profile /> : <Navigate to="/" />}
            />
            <Route path="/" element={<Home />} exact />
            <Route
              path="user"
              element={authState === true ? <User /> : <Navigate to="/" />}
            />
            <Route
              path="save"
              element={authState === true ? <Favorite /> : <Navigate to="/" />}
            />
            <Route
              path="myarts"
              element={authState === true ? <MyArts /> : <Navigate to="/" />}
            />
            <Route
              path="settings"
              element={authState === true ? <Settings /> : <Navigate to="/" />}
            />
            <Route
              path="public"
              element={authState === true ? <Public /> : <Navigate to="/" />}
            />
            <Route
              path="auction"
              element={authState === true ? <Auction /> : <Navigate to="/" />}
            />
          </Routes>
        </Router>
      </UserfnContext>
  );
}

export default App;
