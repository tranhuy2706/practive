import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div id="m_aside_left" className={"m-grid__item	m-aside-left  m-aside-left--skin-dark "}>
      {/* BEGIN: Aside Menu */}
      <div id="m_ver_menu" className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " m-menu-vertical={1} m-menu-scrollable={1} m-menu-dropdown-timeout={500} style={{ position: 'relative' }}>
          <ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
              <li className="m-menu__item" aria-haspopup="true">
                  <NavLink to="/form" className={"m-menu__link "} >
                      <i className="m-menu__link-icon fab fa-wpforms" />
                      <span className="m-menu__link-title">
                          <span className="m-menu__link-wrap">
                              <span className="m-menu__link-text">Form</span>
                          </span>
                      </span>
                  </NavLink>
              </li>
              <li className="m-menu__item" aria-haspopup="true">
                  <NavLink to="/table" className={"m-menu__link "} activeClassName="m-menu__item--active">
                      <i className="m-menu__link-icon fas fa-table" />
                      <span className="m-menu__link-title">
                          <span className="m-menu__link-wrap">
                              <span className="m-menu__link-text">Table</span>
                          </span>
                      </span>
                  </NavLink>
              </li>
              <li className="m-menu__item" aria-haspopup="true">
                  <NavLink to="/Table2" className={"m-menu__link "} activeClassName="m-menu__item--active">
                      <i className="m-menu__link-icon fas fa-table" />
                      <span className="m-menu__link-title">
                          <span className="m-menu__link-wrap">
                              <span className="m-menu__link-text">Table 2</span>
                          </span>
                      </span>
                  </NavLink>
              </li>
              <li className="m-menu__item" aria-haspopup="true">
                  <NavLink to="/Table3" className={"m-menu__link "} activeClassName="m-menu__item--active">
                      <i className="m-menu__link-icon fas fa-table" />
                      <span className="m-menu__link-title">
                          <span className="m-menu__link-wrap">
                              <span className="m-menu__link-text">Table 3</span>
                          </span>
                      </span>
                  </NavLink>
              </li>
              <li className="m-menu__item" aria-haspopup="true">
                  <NavLink to="/hook" className={"m-menu__link "} activeClassName="m-menu__item--active">
                      <i className="m-menu__link-icon fas fa-table" />
                      <span className="m-menu__link-title">
                          <span className="m-menu__link-wrap">
                              <span className="m-menu__link-text">Test Hook</span>
                          </span>
                      </span>
                  </NavLink>
              </li>
            
              <li className="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                  <a href="#/" className="m-menu__link m-menu__toggle">
                      <i className="m-menu__link-icon fas fa-sliders-h" /> 
                      <span className="m-menu__link-text">Settings</span>
                      <i className="m-menu__ver-arrow fas fa-angle-right" />
                  </a>
                  <div className="m-menu__submenu ">
                      <span className="m-menu__arrow" />
                      <ul className="m-menu__subnav">
                          <li className="m-menu__item " aria-haspopup="true">
                              <NavLink to="/login" className="m-menu__link " activeClassName="m-menu__item--active">
                                  <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                      <span />
                                  </i>
                                  <span className="m-menu__link-text">Login</span>
                              </NavLink>
                          </li>
                          <li className="m-menu__item " aria-haspopup="true">
                              <NavLink to="/error" className="m-menu__link " activeClassName="m-menu__item--active">
                                  <i className="m-menu__link-bullet m-menu__link-bullet--dot">
                                      <span />
                                  </i>
                                  <span className="m-menu__link-text">Erorr</span>
                              </NavLink>
                          </li>
                      </ul>
                  </div>
              </li>
          </ul>
      </div>
      {/* END: Aside Menu */}
  </div>
    );
  }
}

export default Menu;
