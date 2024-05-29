import React, { useState } from "react";
import Logo from "../../asset/logo512.png";
import { NavLink } from "react-router-dom";
import { Data } from "../../Constants/Data/Data";
import DownArrow from "../../Assets/NavIcon/DownArrow.svg";
import { IoMenuSharp } from "react-icons/io5";
import "./NavBar.css";

function NavBar() {
  const windowWidth = window.screen.width;
  const [showOptions, setShowOptions] = useState(false);
  const [pannel, setPannel] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [leftMenu, setLeftMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState({
    technology: false,
    industry: false,
  });

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleLeft = () => {
    setLeftMenu((prev) => !prev);
    if (leftMenu) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const toggleMobileDropdown = (section) => {
    setMobileDropdown((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div style={{ position: "sticky", top: "0", zIndex: "1" }} className="navMain">
      <div style={{ display: leftMenu ? "block" : "none" }} className="LeftPanel left-panel">
        <div onClick={toggleLeft} style={{ textAlign: "right", cursor: "pointer", fontSize: "1.4rem", fontWeight: "800", color: "#000" }}>
          <p>&#x2716;</p>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <NavLink to={"home"} style={{ color: "#000" }} className="navLink" onClick={toggleLeft}>
                Home
              </NavLink>
            </li>
            <li onClick={toggleDropdown}>
              Service
              {showDropdown && (
                <ul className="dropdown">
                  {Data["serviceDropDown"]
                    .slice()
                    .sort((a, b) => {
                      const idA = parseInt(a.id, 10);
                      const idB = parseInt(b.id, 10);
                      return idA - idB;
                    })
                    .map((num) => (
                      <li key={num.id}>
                        <NavLink to={num.route} className="navLink" onClick={toggleLeft}>
                          {num.name}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              )}
            </li>
            <li>
              <div onClick={() => toggleMobileDropdown("technology")}>
                Technology
                <img src={DownArrow} alt="Down Arrow" />
              </div>
              {mobileDropdown.technology && (
                <ul className="dropdown">
                  {Data["tecnologyDropDown"]
                    .slice()
                    .sort((a, b) => {
                      const idA = parseInt(a.id, 10);
                      const idB = parseInt(b.id, 10);
                      return idA - idB;
                    })
                    .map((num) => (
                      <li key={num.id}>
                        <NavLink to={num.route} className="navLink" onClick={toggleLeft}>
                          {num.name}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              )}
            </li>
            <li>
              <div onClick={() => toggleMobileDropdown("industry")}>
                Industry
                <img src={DownArrow} alt="Down Arrow" />
              </div>
              {mobileDropdown.industry && (
                <ul className="dropdown scrollable-dropdown">
                  {Data["industryDropDown"]
                    .slice()
                    .sort((a, b) => {
                      const idA = parseInt(a.id, 10);
                      const idB = parseInt(b.id, 10);
                      return idA - idB;
                    })
                    .map((num) => (
                      <li key={num.id}>
                        <NavLink to={num.route} className="navLink" onClick={toggleLeft}>
                          {num.name}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              )}
            </li>
            <li className="navLink contact">
              <NavLink to="contact" style={{ color: "#000" }} onClick={toggleLeft}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div style={{ background: "#000" }} className="navContainer flex flex-space-between">
        <div className="logoContainer flex">
          <img src={Logo} alt="Logo" className="logo" />
          <NavLink to="/home" activeClassName="active" className="logoText">
            <p style={{ fontSize: windowWidth > 786 ? "1.25rem" : "1.4rem" }} className="button-text text-white">
              Sprint Tech Labs
            </p>
          </NavLink>
        </div>
        <div onClick={toggleLeft} className="HamBurger text">
          {windowWidth <= 786 ? <IoMenuSharp size={24} color="white" /> : <p style={{ color: "white", fontSize: "1.5rem" }}>Menu</p>}
        </div>
        <div className="flex flex-space-evenly text-white text-nav menu">
          <NavLink to={"home"} style={{ textDecoration: "none", color: "white" }} onClick={() => setShowOptions(false)}>
            Home
          </NavLink>
          <p onClick={() => { setPannel("serviceDropDown"); setShowOptions(!showOptions); }} style={{ cursor: "pointer" }}>
            Service
          </p>
          <div
            style={{
              display: pannel === "serviceDropDown" && showOptions ? "none" : "block",
              marginLeft: "-1.389vw",
              marginTop: "0.4vw",
              cursor: "pointer",
            }}
            className="downArrow"
            onClick={() => { setPannel("serviceDropDown"); setShowOptions(!showOptions); }}
          >
            <img src={DownArrow} alt="" width="15vw" />
          </div>
          <p onClick={() => { setPannel("tecnologyDropDown"); setShowOptions(!showOptions); }} style={{ cursor: "pointer" }}>
            Technologies
          </p>
          <div
            style={{
              display: pannel === "tecnologyDropDown" && showOptions ? "none" : "block",
              marginLeft: "-1.389vw",
              marginTop: "0.4vw",
              cursor: "pointer",
            }}
            onClick={() => { setPannel("tecnologyDropDown"); setShowOptions(!showOptions); }}
            className="downArrow"
          >
            <img src={DownArrow} alt="" width="15vw" />
          </div>
          <p onClick={() => { setPannel("industryDropDown"); setShowOptions(!showOptions); }} style={{ cursor: "pointer" }}>
            Industries
          </p>
          <div
            style={{
              display: pannel === "industryDropDown" && showOptions ? "none" : "block",
              marginLeft: "-1.389vw",
              marginTop: "0.4vw",
              cursor: "pointer",
            }}
            onClick={() => { setPannel("industryDropDown"); setShowOptions(!showOptions); }}
            className="downArrow"
          >
            <img src={DownArrow} alt="" width="15vw" />
          </div>
        </div>
        <NavLink to="contact" style={{ textDecoration: "none" }} className="whiteButton button-text contact">
          <p>Contact</p>
        </NavLink>
      </div>
      {showOptions && (
        <div className="navDropDown" onClick={() => setShowOptions(false)}>
          <div
            style={{
              width: "100%",
              backgroundColor: "white",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              padding: "2.061vw 8.472vw",
              rowGap: "1.667vw",
              borderBottom: "0.139vw solid #5D2EDE",
              borderTop: "0.139vw solid #5D2EDE",
              borderRadius: "0.556vw",
            }}
          >
            {Data[pannel].map((item) => (
              <div style={{ width: "21.528vw" }} key={item.id}>
                <div
                  style={{
                    width: "21.528vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    borderBottom: item.subLink.length && "0.139vw solid #5D2EDE",
                    padding: item.subLink.length && "1.111vw 0.556vw",
                    borderRadius: "0.556vw",
                  }}
                >
                  <img src={item.icon} alt="Icon" style={{ width: "1.667vw" }} />
                  <p>
                    <NavLink to={item.route} style={{ color: "#000" }} className="navLink">
                      {item.name}
                    </NavLink>
                  </p>
                </div>
                {item.subLink.length > 0 && item.subLink.map((link, index) => (
                  <div key={index} className="subLink" style={{ paddingLeft: "3.472vw" }}>
                    <p className="gray-text">{link.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
