import { useEffect } from "react";
import "./Navbar.css"

const Navbar = () => {
  
  const sidebarClose = () => {
    const sidebar = document.getElementById("sidebar")
    sidebar.classList.remove("sidebar-open-animate")
    sidebar.classList.add("sidebar-close-animate")
    sidebar.style.right = "-300px";
  } 

  const sidebarOpen = () => {
    const sidebar = document.getElementById("sidebar")
    sidebar.classList.remove("sidebar-close-animate")
    sidebar.classList.add("sidebar-open-animate")
    sidebar.style.right = 0;
  }

  const activeNavLink = () => {
    const activePage = window.location.pathname;
    if(activePage == "/"){
      const home = document.getElementById("home");
      home.classList.add("active")
    }
    else{
      const links = document.querySelectorAll("a");
      links.forEach((link) => {
      if(link.href.includes(`${activePage}`)){
        link.classList.add("active");
      }
    })
  }
  }

  useEffect(() => {
    activeNavLink();
  },[])



  return (
      <nav id="navbar">
        <ul className="navbar-ul">
          <li className="logo-li">
            <div className="circle"></div>
            <h1 className="nav-title">Ira Kushwaha</h1>
          </li>
          <li>
            <a href="/about" className="nav-li-child hideNavLink" id="home">About</a>
          </li>
          <li>
            <a  href="/work" className="nav-li-child hideNavLink">Work</a>
          </li>
          <li>
            <a  href="/testimonials" className="nav-li-child hideNavLink">Testimonials</a>
          </li>
          <li>
            <a  href="/contact" className="nav-li-child hideNavLink">Contact</a>
          </li>
          <li>
            <i className="fa-solid fa-bars menu-btn" onClick={sidebarOpen}></i>
          </li>
        </ul>
        <ul className="sidebar-ul" id="sidebar">
          <li>
            <i className="fa-solid fa-xmark close-btn" onClick={sidebarClose}></i>
          </li>
          <li>
            <a href="/about" className="sidebar-li-child" id="homeSidebar">About</a>
          </li>
          <li>
            <a  href="/work" className="sidebar-li-child">Work</a>
          </li>
          <li>
            <a  href="/testimonials" className="sidebar-li-child">Testimonials</a>
          </li>
          <li>
            <a  href="/contact" className="sidebar-li-child">Contact</a>
          </li>
        </ul>
      </nav>
  );
};



export default Navbar;
