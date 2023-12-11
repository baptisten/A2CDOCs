import * as React from "react";
import { Link } from "gatsby";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
          <div className="inner-footer">
          <div className="content-logo">
            <img
              src='/img/logo.png'
              alt="A2c"
              style={{ width: "14em", height: "10em" }}
            />
          </div>
          <div className="footer-links">
            <div className="mentions-legales">
              <a href="/about">Mentions légales</a><br /><br />
            </div>
            <div className="nous-contacter">
              Nous contacter<br />
              <a href="mailto:a2cdocs@a2c-materiaux.com">
                a2cdocs@a2c-materiaux.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
