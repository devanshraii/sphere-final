import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Footer.css";
import ButtonBackground from "../../Assets/Rectangle 1.svg";
import Profile from "../../Assets/iconamoon_profile-fill.svg";
import Mail from "../../Assets/material-symbols-light_mail.svg";
import Call from "../../Assets/material-symbols_call.svg";
import Write from "../../Assets/system-uicons_write.svg";
import Location from "../../Assets/fluent_location-24-filled.svg";
import Facebook from "../../Assets/Social Media Icon.svg";
import Instgram from "../../Assets/Social Media Icon Square.svg";
import Twitter from "../../Assets/Group 73.svg";
import LinkedIn from "../../Assets/Social Media Icon Square (1).svg";
import Logo from "../../asset/logo512.png";
import FacebookDark from "../../Assets/FacebookDark.svg";
import InstaDark from "../../Assets/InstaDark.svg";
import YouTubeDark from "../../Assets/YoutubeDark.svg";
import TwitterDark from "../../Assets/TwitterDark.svg";
import LinkedInDark from "../../Assets/LinkedInDark.svg";

function Footer() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ywuy22r",
        "template_6wae4yh",
        e.target,
        "vmcjoGFLuQN-iM8Xv"
        
      )
      .then(
        (result) => {
          console.log(result.text);
          // Reset form data
          setFormData({
            fullName: "",
            email: "",
            mobile: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="FooterContainer">
      <div className="ContactUs">
        <form className="Form flex flex-column flex-center" onSubmit={handleSubmit}>
          <div className="input-style-form InputDiv">
            <img className="Icon" src={Profile} alt="Profile Icon" />
            <input
              name="fullName"
              className="text-input"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-style-form InputDiv">
            <img className="Icon" src={Mail} alt="Mail Icon" />
            <input
              name="email"
              type="email"
              className="text-input"
              placeholder="Email-ID"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-style-form InputDiv">
            <img className="Icon" src={Call} alt="Call Icon" />
            <input
              name="mobile"
              className="text-input"
              placeholder="Mobile no."
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-style-form TextDiv">
            <img className="Icon" src={Write} alt="Write Icon" />
            <textarea
              name="message"
              className="text-input"
              placeholder="Drop your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="Submit flex flex-center text">
            Submit
          </button>
        </form>
        <div className="Detail">
          <div className="heading text-white">Get in touch today</div>
          <div className="text text-white subDetail">
            <img className="Icon DarkIcon" src={Call} alt="Call Icon" />
            +91 9820835484       
          </div>
          <div className="text text-white subDetail">
            <img className="Icon DarkIcon" src={Mail} alt="Mail Icon" />
            hello@sprinttechlabs.com  
          </div>
          <div className="text text-white subDetail ">
            <img className="Icon DarkIcon" src={Location} alt="Location Icon" />
            <div>
              103, Satra Plaza, Sec 19D, Vashi,
              <br />Navi Mumbai, 400703
            </div>
          </div>
          <div className="SocialLinks flex">
            <div>
              <img className="Icon DarkIcon" src={Facebook} alt="Facebook Icon" />
            </div>
            <div>
              <img className="Icon DarkIcon" src={Twitter} alt="Twitter Icon" />
            </div>
            <div>
              <img className="Icon DarkIcon" src={Instgram} alt="Instagram Icon" />
            </div>
            <div>
              <img className="Icon DarkIcon" src={LinkedIn} alt="LinkedIn Icon" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="Links flex flex-center flex-wrap">
          <div className="LogoDiv text-center">
            <div className="">
              <img className="Icon FooterIcon" src={Logo} alt="Logo Icon" />
            </div>
            <div className="text-white text">
              Sprint Tech Labs, where Innovation meets Transformation!
            </div>
            <div className="flex linkDiv flex-center">
              <div className="linkContainer">
                <div>
                  <img className="DarkIcon" src={FacebookDark} alt="Facebook Dark Icon" />
                </div>
                <div>
                  <img className="DarkIcon" src={InstaDark} alt="Instagram Dark Icon" />
                </div>
                <div>
                  <img className="DarkIcon" src={YouTubeDark} alt="YouTube Dark Icon" />
                </div>
                <div>
                  <img className="DarkIcon" src={LinkedInDark} alt="LinkedIn Dark Icon" />
                </div>
                <div>
                  <img className="DarkIcon" src={TwitterDark} alt="Twitter Dark Icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="footerResponsive">
            <div className="text-white block-main">
              <div className="linkHeading button-text">Service</div>
              <div>
                <a className="anchor">AI & ML</a>
              </div>
              <div>
                <a className="anchor">Cloud</a>
              </div>
              <div>
                <a className="anchor">Data</a>
              </div>
              <div>
                <a className="anchor">Mobility</a>
              </div>
              <div>
                {" "}
                <a className="anchor">QA & Testing</a>
              </div>
            </div>
            <div className="text-white block-main">
              <div className="linkHeading button-text">Technology</div>
              <div>
                <a className="anchor">Blockchain</a>
              </div>
              <div>
                <a className="anchor">Mobility</a>
              </div>
              <div>
                <a className="anchor">Cloud</a>
              </div>
              <div>
                <a className="anchor">Data Analytics</a>
              </div>
              <div>
                <a className="anchor">Open Source</a>
              </div>
            </div>
            <div className="text-white block-main">
              <div className="linkHeading button-text">Industries</div>
              <div>
                <a className="anchor"> Web3</a>
              </div>
              <div>
                <a className="anchor">Hi - Tech</a>
              </div>
              <div>
                <a className="anchor">Financial services</a>
              </div>
              <div>
                <a className="anchor">Insurance</a>
              </div>
              <div>
                <a className="anchor">Healthcare</a>
              </div>
            </div>
          </div>
        </div>
        <div className="Links-copyright">
          <hr />
          <div className="text-white flex flex-center text CopyRight">
            Copyright Sprint Tech Labs | All Rights Reserved 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;