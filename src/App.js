import "./App.css";
import logo from "./images/logo.png";
import zel from "./images/zel.png";
import camera from "./images/camera.png";
import locat from "./images/locat.png";

import blue from "./images/blue.jpg";
import ocean from "./images/ocean.jpg";
import stark from "./images/stark.jpg";
import vinna from "./images/vinna.jpg";
import bobox from "./images/bobox.jpg";

import shangri from "./images/shangri.jpg";
import topview from "./images/topview.jpg";
import green from "./images/green.jpg";
import wodden from "./images/wodden.jpg";
import boutiqe from "./images/boutiqe.jpg";
import modern from "./images/modern.jpg";
import silver from "./images/silver.jpg";
import cashville from "./images/cashville.jpg";

function App() {
  return (
    <div>
      <header>
        <div className="header_left">
          LankaStay.
        </div>
        <div className="header_right">
          <a className="active">Home</a>
          <a>Hotels</a>
          <a>Rooms</a>
          <a>About</a>
          <a>Contact</a>
          <button>Login</button>
        </div>
      </header>

      <div className="box">
        <div className="text_box">
          <span>Forget Busy Work, Start Next Vacation</span>
          <p>
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <button>Show More</button>

          <div className="stats">
            <div className="stat">
              <img src={zel} alt="" />
              <p>
                <b>2500</b> Users
              </p>
            </div>
            <div className="stat">
              <img src={camera} alt="" />
              <p>
                <b>200</b> treasure
              </p>
            </div>
            <div className="stat">
              <img src={locat} alt="" />
              <p>
                <b>100</b> cities
              </p>
            </div>
          </div>
        </div>

        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="search">
        <div className="search_item"> Check Available</div>
        <div className="search_item"> Person 2 ⌄</div>
        <div className="search_item">
          <img src={locat} alt="" />
          Select Location
        </div>
        <button>Search</button>
      </div>

      <div className="section">
        <h2>Most Picked</h2>
        <div className="picked">
          <div className="picked_card big">
            <img src={blue} alt="" />
            <span className="price">
              <b>$50</b> per night
            </span>
            <div className="picked_text">
              <h3>Blue Origin Fams</h3>
              <p>Galle, Sri Lanka</p>
            </div>
          </div>

          <div className="picked_card">
            <img src={ocean} alt="" />
            <span className="price">
              <b>$22</b> per night
            </span>
            <div className="picked_text">
              <h3>Ocean Land</h3>
              <p>Trincomalee, Sri Lanka</p>
            </div>
          </div>

          <div className="picked_card">
            <img src={stark} alt="" />
            <span className="price">
              <b>$856</b> per night
            </span>
            <div className="picked_text">
              <h3>Stark House</h3>
              <p>Dehiwala, Sri Lanka</p>
            </div>
          </div>

          <div className="picked_card">
            <img src={vinna} alt="" />
            <span className="price">
              <b>$62</b> per night
            </span>
            <div className="picked_text">
              <h3>Vinna Vill</h3>
              <p>Beruwala, Sri Lanka</p>
            </div>
          </div>

          <div className="picked_card">
            <img src={bobox} alt="" />
            <span className="price">
              <b>$72</b> per night
            </span>
            <div className="picked_text">
              <h3>Bobox</h3>
              <p>Kandy, Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section hotels">
        <div className="hotel">
          <div className="hotel_img">
            <img src={shangri} alt="" />
            <span className="popular">
              <b>Popular</b> Choice
            </span>
          </div>
          <h3>Shangri-La</h3>
          <p>Colombo, Sri Lanka</p>
        </div>

        <div className="hotel">
          <div className="hotel_img">
            <img src={topview} alt="" />
          </div>
          <h3>Top View</h3>
          <p>Hikkaduwe, Sri Lanka</p>
        </div>

        <div className="hotel">
          <div className="hotel_img">
            <img src={green} alt="" />
          </div>
          <h3>Green Villa</h3>
          <p>Kandy, Sri Lanka</p>
        </div>

        <div className="hotel">
          <div className="hotel_img">
            <img src={wodden} alt="" />
          </div>
          <h3>Wodden Pit</h3>
          <p>Ambalangode, Sri Lanka</p>
        </div>

        <div className="hotel">
          <div className="hotel_img">
            <img src={boutiqe} alt="" />
          </div>
          <h3>Boutiqe</h3>
          <p>Kandy, Sri Lanka</p>
        </div>

        <div className="hotel">
          <div className="hotel_img">
            <img src={modern} alt="" />
          </div>
          <h3>Modern</h3>
          <p>Nuwereliya, Sri Lanka</p>
        </div>

        <div className="hotel">
          <div className="hotel_img">
            <img src={silver} alt="" />
          </div>
          <h3>Silver Rain</h3>
          <p>Dehiwala, Sri Lanka</p>
        </div>

        <div className="hotel">
          <div className="hotel_img">
            <img src={cashville} alt="" />
            <span className="popular">
              <b>Popular</b> Choice
            </span>
          </div>
          <h3>Cashville</h3>
          <p>Ampara, Sri Lanka</p>
        </div>
      </div>

      <footer>
        <div className="footer_top">
          <div>
            <div className="header_left footer_logo">
              LankaStay.
            </div>
            <p>
              We kaboom your beauty holiday <br /> instantly and memorable.
            </p>
          </div>
          <div className="owner">
            
            <button>Register Now</button>
          </div>
        </div>
        
      </footer>
    </div>
  );
}

export default App;
