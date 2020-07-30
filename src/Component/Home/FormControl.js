import React, { Component } from 'react';

class FormControl extends Component {
    render() {
        return (
            <div className="m-grid__item m-grid__item--fluid m-wrapper">
                <div class="m-content">
                    <div class="row">
                        <div className="col-md-6">
                            {/*begin::Portlet*/}
                            <div className="m-portlet m-portlet--tab">
                                <div className="m-portlet__head">
                                    <div className="m-portlet__head-caption">
                                        <div className="m-portlet__head-title">
                                            <span className="m-portlet__head-icon m--hide">
                                                <i className="la la-gear" />
                                            </span>
                                            <h3 className="m-portlet__head-text">
                                                Base Form Controls
                                    </h3>
                                        </div>
                                    </div>
                                </div>
                                {/*begin::Form*/}
                                <form className="m-form m-form--fit m-form--label-align-right">
                                    <div className="m-portlet__body">
                                        <div className="form-group m-form__group m--margin-top-10">
                                            <div className="alert m-alert m-alert--default" role="alert">
                                                The example form below demonstrates common HTML form elements that receive updated styles from Bootstrap with additional classes.
                                    </div>
                                        </div>
                                        <div className="form-group m-form__group">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control m-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                            <span className="m-form__help">We'll never share your email with anyone else.</span>
                                        </div>
                                        <div className="form-group m-form__group">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control m-input" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <div className="form-group m-form__group">
                                            <label>Static:</label>
                                            <p className="form-control-static">email@example.com</p>
                                        </div>
                                        <div className="form-group m-form__group">
                                            <label htmlFor="exampleSelect1">Example select</label>
                                            <select className="form-control m-input" id="exampleSelect1">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div className="form-group m-form__group">
                                            <label htmlFor="exampleSelect2">Example multiple select</label>
                                            <select multiple className="form-control m-input" id="exampleSelect2">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div className="form-group m-form__group">
                                            <label htmlFor="exampleTextarea">Example textarea</label>
                                            <textarea className="form-control m-input" id="exampleTextarea" rows={3} defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="m-portlet__foot m-portlet__foot--fit">
                                        <div className="m-form__actions">
                                            <button type="reset" className="btn btn-primary">Submit</button>
                                            <button type="reset" className="btn btn-secondary">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                                {/*end::Form*/}

                            </div>
                        </div>
                        <div className="col-md-6">
                            {/*begin::Portlet*/}
                            <div className="m-portlet m-portlet--tab">
                                <div className="m-portlet__head">
                                    <div className="m-portlet__head-caption">
                                        <div className="m-portlet__head-title">
                                            <span className="m-portlet__head-icon m--hide">
                                                <i className="la la-gear" />
                                            </span>
                                            <h3 className="m-portlet__head-text">
                                                Square Input Style
          </h3>
                                        </div>
                                    </div>
                                </div>
                                {/*begin::Form*/}
                                <form className="m-form m-form--fit m-form--label-align-right">
                                    <div className="m-portlet__body">
                                        <div className="form-group m-form__group">
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control m-input m-input--square" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                            <span className="m-form__help">We'll never share your email with anyone else.</span>
                                        </div>
                                        <div className="form-group m-form__group">
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control m-input m-input--square" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <div className="form-group m-form__group">
                                            <label htmlFor="exampleSelect1">Example select</label>
                                            <select className="form-control m-input m-input--square" id="exampleSelect1">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="m-portlet__foot m-portlet__foot--fit">
                                        <div className="m-form__actions">
                                            <button type="reset" className="btn btn-metal">Submit</button>
                                            <button type="reset" className="btn btn-secondary">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                                {/*end::Form*/}
                            </div>
                            {/*end::Portlet*/}
                            
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default FormControl;