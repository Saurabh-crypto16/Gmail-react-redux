import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EmailList from "./components/EmailList";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login } from "./features/userSlice";

function App() {
  //getting mail slice from redux store
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  //getting user slice from redux store
  const user = useSelector(selectUser);

  //for persistent login that is keeping logged in state post refresh
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //user already logged in it sets up a cookie
        dispatch(
          login({
            //payload
            //all these functions are given by GOOGLE
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      } else {
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
