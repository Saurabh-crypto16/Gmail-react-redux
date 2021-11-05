import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { logout } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    //auth.signOut() signouts the user from firebase
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={require("../assets/gmail_logo.png").default} alt="" />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <HelpIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>

        <Avatar
          className="headerRight__avatar"
          src={user?.photoUrl}
          onClick={signOut}
        />
      </div>
    </div>
  );
}

export default Header;
