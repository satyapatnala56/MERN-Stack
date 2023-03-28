import React, { createContext, useState } from "react";
import { Favourites, MyImages } from "./data";

export const UserContext = createContext();

export function UserfnContext(props) {
  const [User, setUser] = useState({
    name: "karthik",
    email: "karthik.m20@iiits.in",
    pass: "123",
    ph: "14526411",
  });
  const [fav, setfav] = useState([...Favourites]);
  const [myarts, setMyarts] = useState([...MyImages]);
  const [Name, setName] = useState();
  const [isAuth, setIsAuth] = useState(true);

  const UserSetter = (data) => {
    setUser(data);
  };
  const FavSetter = (data) => {
    setfav([...fav, data]);
  };

  const AddArt = (data) => {
    console.log(data);
    setMyarts([...myarts, data]);
  };

  return (
    <UserContext.Provider
      value={{
        User,
        UserSetter,
        Name,
        setName,
        fav,
        FavSetter,
        myarts,
        AddArt,
        isAuth,
        setIsAuth,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
