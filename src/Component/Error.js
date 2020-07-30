import React, { Component } from 'react';

class Error extends Component {
    render() {
        return (
            <div>
                <div className="m-grid m-grid--hor m-grid--root m-page">
                    <div className="m-grid__item m-grid__item--fluid m-grid  m-error-3" style={{ backgroundImage: 'url(./img//error/bg3.jpg)' }}>
                        <div className="m-error_container">
                            <span className="m-error_number">
                                <h1>404</h1>
                            </span>
                            <p className="m-error_title m--font-light">
                                How did you get here
                             </p>
                            <p className="m-error_subtitle">
                                Sorry we can't seem to find the page you're looking for.
                            </p>
                            <p className="m-error_description">
                                There may be amisspelling in the URL entered,
                            <br /> or the page you are looking for may no longer exist.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Error;