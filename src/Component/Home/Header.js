import React, { Component } from "react";
import { BrowserRouter as Router, Link, NavLink, Redirect } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    }
  }


  componentWillMount() {
    var Islogin = localStorage.getItem('Islogin')
    console.log(Islogin)
    if (Islogin === null) {
      this.setState({
        isLogin: false
      });
    }
  }


  render() {
    if (this.state.isLogin === false) {
      return (
        <Redirect to={'/login'} />
      )
    }


    return (
      <header
        id="m_header"
        className="m-grid__item    m-header "
        m-minimize-offset={200}
        m-minimize-mobile-offset={200}
      >
        <div className="m-container m-container--fluid m-container--full-height">
          <div className="m-stack m-stack--ver m-stack--desktop">
            {/* BEGIN: Brand */}
            <div className="m-stack__item m-brand  m-brand--skin-dark ">
              <div className="m-stack m-stack--ver m-stack--general">
                <div className="m-stack__item m-stack__item--middle m-brand__logo">
                  <NavLink to="/" className="m-brand__logo-wrapper">
                    <img
                      alt=""
                      src="/img/logos/logo_invoice_dark.png"
                    />
                  </NavLink>
                </div>
                <div className="m-stack__item m-stack__item--middle m-brand__tools">
                  {/* BEGIN: Left Aside Minimize Toggle */}
                  <a
                    href="javascript:;"
                    id="m_aside_left_minimize_toggle"
                    className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block  "
                  >
                    <span />
                  </a>
                  {/* END */}
                  {/* BEGIN: Responsive Aside Left Menu Toggler */}
                  <a
                    href="javascript:;"
                    id="m_aside_left_offcanvas_toggle"
                    className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block"
                  >
                    <span />
                  </a>
                  {/* END */}
                  {/* BEGIN: Responsive Header Menu Toggler */}
                  <a
                    id="m_aside_header_menu_mobile_toggle"
                    href="javascript:;"
                    className="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block"
                  >
                    <span />
                  </a>
                  {/* END */}
                  {/* BEGIN: Topbar Toggler */}
                  <a
                    id="m_aside_header_topbar_mobile_toggle"
                    href="javascript:;"
                    className="m-brand__icon m--visible-tablet-and-mobile-inline-block"
                  >
                    <i className="flaticon-more" />
                  </a>
                  {/* BEGIN: Topbar Toggler */}
                </div>
              </div>
            </div>
            {/* END: Brand */}
            <div
              className="m-stack__item m-stack__item--fluid m-header-head"
              id="m_header_nav"
            >
              {/* BEGIN: Topbar */}
              <div
                id="m_header_topbar"
                className="m-topbar  m-stack m-stack--ver m-stack--general m-stack--fluid"
              >
                <div className="m-stack__item m-topbar__nav-wrapper">
                  <ul className="m-topbar__nav m-nav m-nav--inline">
                    <li
                      className="m-nav__item m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width m-dropdown--skin-light	m-list-search m-list-search--skin-light"
                      m-dropdown-toggle="click"
                      id="m_quicksearch"
                      m-quicksearch-mode="dropdown"
                      m-dropdown-persistent={1}
                    >
                      <div className="m-dropdown__wrapper">
                        <span className="m-dropdown__arrow m-dropdown__arrow--center" />
                        <div className="m-dropdown__inner ">
                          <div className="m-dropdown__header">
                            <form className="m-list-search__form">
                              <div className="m-list-search__form-wrapper">
                                <span
                                  className="m-list-search__form-icon-close"
                                  id="m_quicksearch_close"
                                >
                                  <i className="la la-remove" />
                                </span>
                              </div>
                            </form>
                          </div>
                          <div className="m-dropdown__body">
                            <div
                              className="m-dropdown__scrollable m-scrollable"
                              data-scrollable="true"
                              data-height={300}
                              data-mobile-height={200}
                            >
                              <div className="m-dropdown__content"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light"
                      m-dropdown-toggle="click"
                    >
                      <a href="#" className="m-nav__link m-dropdown__toggle">
                        <span className="m-topbar__userpic">
                          <img
                            src="/img/users/user4.jpg"
                            className="m--img-rounded m--marginless"
                            alt=""
                          />
                        </span>
                        <span className="m-topbar__username m--hide">Nick</span>
                      </a>
                      <div className="m-dropdown__wrapper">
                        <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" />
                        <div className="m-dropdown__inner">
                          <div
                            className="m-dropdown__header m--align-center"
                            style={{
                              background:
                                "url(/img/misc/user_profile_bg.jpg)",
                              backgroundSize: "cover",
                            }}
                          >
                            <div className="m-card-user m-card-user--skin-dark">
                              <div className="m-card-user__pic">
                                <img
                                  src="/img/users/user4.jpg"
                                  className="m--img-rounded m--marginless"
                                  alt=""
                                />
                                {/*
																<span class="m-type m-type--lg m--bg-danger"><span class="m--font-light">S<span><span>
																*/}
                              </div>
                              <div className="m-card-user__details">
                                <span className="m-card-user__name m--font-weight-500">
                                  Mark Andre
                                </span>
                                <a
                                  href
                                  className="m-card-user__email m--font-weight-300 m-link"
                                >
                                  mark.andre@gmail.com
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="m-dropdown__body">
                            <div className="m-dropdown__content">
                              <ul className="m-nav m-nav--skin-light">
                                <li className="m-nav__item">
                                  <NavLink to="/login" className="btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder">
                                    Logout
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* END: Topbar */}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
