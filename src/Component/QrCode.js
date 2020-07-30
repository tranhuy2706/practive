import React, { Component } from 'react';

class QrCode extends Component {
    render() {
        return (
            <h1>Hellôo</h1>,
            <div className="m-grid__item m-grid__item--fluid m-wrapper p-2">
            <div className="m-portlet m-portlet--full-height m-portlet--fit">
                <div className="m-portlet__head">
                    <div className="m-portlet__head-caption">
                        <div className="m-portlet__head-title">
                            <h3 className="m-portlet__head-text">
                                <span className="m-nav__link-icon text-danger mr-2">
                                    <span className="m-nav__link-icon-wrapper">
                                        <i className="la la-qrcode" />
                                    </span>
                                </span>
                                QR Code
                            </h3>
                        </div>
                    </div>
                    <div className="row p-3 col-xl-11" id="select_qrcode">
                        <div className="m--margin-bottom-10-tablet-and-mobile select_camera">
                            

                        </div>
                        <div className="col-md-5 col-lg-4 m--margin-bottom-10-tablet-and-mobile select_camera">
                           

                        </div>
                    </div>
                </div>
                <div className="m-portlet__body m-portlet__body--no-padding">
                    <div className="row m-row--no-padding m-row--col-separator-xl">
                        <div className="col-xl-12">
                            <div className="m-widget1">
                                <div className="table   -responsive">
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default QrCode;