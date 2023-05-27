import * as React from "react";
import { Link } from "gatsby";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <img
            src='/img/logo.png'
            alt="A2c"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
      </footer>
    );
  }
};

export default Footer;
