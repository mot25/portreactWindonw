import React from "react";

import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="grey darken-3 page-footer">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
