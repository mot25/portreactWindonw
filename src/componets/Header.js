import React from "react";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper grey darken-3">
            <a href="#" className="brand-logo">
              React
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="#">Something</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
