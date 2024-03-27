import React, { useState } from "react";
import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";

const Navbar = () => {

  const [isScrolled,setScrolled] = useState(false);

  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0? false : true);
    return  () => window.onscroll = null;
  }


  return (
    <div className={isScrolled? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Logo"
          />
          <span>HomePage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Kid</span>
          <Notifications className="icon" />
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3503c5b3-c969-49ce-815d-cf608893048c/dfn7gz8-c939cb41-c214-451a-b615-0e282bd3a9bf.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM1MDNjNWIzLWM5NjktNDljZS04MTVkLWNmNjA4ODkzMDQ4Y1wvZGZuN2d6OC1jOTM5Y2I0MS1jMjE0LTQ1MWEtYjYxNS0wZTI4MmJkM2E5YmYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.L7EPL7I3O_94MhtalbBD-S-Z4Ca0yi2_T2c449Qter8"
            alt="Profile"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
