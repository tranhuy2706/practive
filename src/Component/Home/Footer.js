import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className={"m-grid__item m-footer "}>
        <div className="m-container m-container--fluid m-container--full-height m-page__container">
          <div className="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
            <div className="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
              <span className="m-footer__copyright">
                2019
            </span>
            </div>
            <div className="m-stack__item m-stack__item--right m-stack__item--middle m-stack__item--first">
              <ul className="m-footer__nav m-nav m-nav--inline m--pull-right">
                <li className="m-nav__item">
                  <a href="http://reva.com.vn" target="blank" className="m-nav__link">
                    <span className="m-nav__link-text">About</span>
                  </a>
                </li>
                <li className="m-nav__item">
                  <a href="http://reva.com.vn#contact" target="blank" className="m-nav__link">
                    <span className="m-nav__link-text">Support Center</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
