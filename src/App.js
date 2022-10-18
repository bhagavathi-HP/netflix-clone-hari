import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
function App() {
  const users = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
      return unsubscribe;
    });
  }, [dispatch]);
  return (
    <div className="app">
      <div>
        <BrowserRouter>
          {!users ? (
            <LoginScreen />
          ) : (
            <Routes>
              <Route path="/profile" element={<ProfileScreen />} />
              <Route exact path="/" element={<HomeScreen />}></Route>
            </Routes>
          )}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
