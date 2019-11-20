import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";
import musicIcon from '../images/music2.jpg';
import movieIcon from '../images/video.jpg';
import abookIcon from '../images/audiobook.png';
import musicVidIcon from '../images/video-itunes.png';
import homeIcon from '../images/home.jpg';

//this component renders different icons as navigation elements

function NavBar() {
  return (
    <header className="App-header">
      <Navbar expand="sm" bg="dark" variant="light" className="icons"> 
            <Nav className="mr-auto">

            <NavLink to="/" activeStyle = {{ opacity:"0.4" }} >
                <img className= "nav-img" src = {homeIcon} alt = "home icon"/>
              </NavLink>

              <NavLink to="/music" activeStyle = {{ opacity:"0.4" }} >
                <img className= "nav-img" src = {musicIcon} alt = "music icon"/>
              </NavLink>

              <NavLink to="/videos" activeStyle = {{ opacity:"0.4" }} >
              <img className = "nav-img" src = {musicVidIcon} alt = "music video icon"/>
              </NavLink>

              <NavLink to="/movies" activeStyle = {{ opacity:"0.4" }} >
                <img className = "nav-img" src = {movieIcon} alt = "movie icon"/>
              </NavLink> 

              <NavLink to="/audiobooks" activeStyle = {{ opacity:"0.4" }}>
              <img width="107" marginLeft="50px" src = {abookIcon} alt = "audiobook icon" />
              </NavLink>

            </Nav>
      </Navbar>
    </header>
  );
}

export default NavBar;

