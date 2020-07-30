import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import Modal from '../Model/addTable2'
import swal from 'sweetalert';


class table2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listTypeDevice: [],
            activePage:1,
            totalLenght: 0,
            offset: 1,
            typeDevice: [],
            valueSearch:'',
            showModal: false,
            crrTypeDevice:{
                name:'',
                description:''
            }
        }
        this.itemsPerPage = 2
    }

    getAll = () => {
        fetch(`http://api.cms_dev.beetai.com//api/type_device/get_all`, {
            method: 'GET',
            headers: {
                'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTQyODM5OTEsIm5iZiI6MTU5NDI4Mzk5MSwianRpIjp7ImVtYWlsIjoiYWRtaW5AYmkuY29tIiwicnVsZSI6IjEiLCJ1c2VyX2lkIjoxLCJpZF9jb21wYW55Ijo5MywiZmlyc3RfbmFtZSI6IkJlZXRBSSIsImxhc3RfbmFtZSI6IkFkbWluIn0sImV4cCI6MTU5NDg4ODc5MSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.Ptn7LEopSbnHQyPhGs23IuzsWiqveq_3CrlRJMqXo1k"
            },
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.status === 10000) {
                this.setState({
                    listTypeDevice: data.data
                });
                this.filterTypeDevice(this.state.activePage)
            }
        })
    }

    filterTypeDevice = (activePage) => {
        var searchBox = [];
        this.state.listTypeDevice.forEach((item) => {
            if (item.name.toLowerCase().indexOf(this.state.valueSearch.toLowerCase()) !== -1) {
                searchBox.push(item)
            }
        })
        const offset = (activePage - 1) * this.itemsPerPage
        const typeDevice = searchBox.slice(offset, offset + this.itemsPerPage)
        this.setState({
            offset,
            typeDevice,
            totalLenght: searchBox.length
        });
    }

    componentDidMount() {
        this.getAll()
    }

    handlePageChange = (pageNumber) => {
        this.setState({
            activePage: pageNumber
        });
        this.filterTypeDevice(pageNumber)
    }

    handleChange = (e) => {
        this.setState({
            valueSearch: e.target.value
        });
        console.log(this.state.valueSearch)
    }

    btnSearch = () => {
        this.setState({
            activePage: 1
        });
        this.filterTypeDevice(this.state.activePage)
    }

    close = () => {
        this.setState({
            showModal: false
        });
    }

    deleteTypeDevice = async (type) => {
        let data = await fetch (`http://api.cms_dev.beetai.com//api/type_device/delete`,{
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTQyODM5OTEsIm5iZiI6MTU5NDI4Mzk5MSwianRpIjp7ImVtYWlsIjoiYWRtaW5AYmkuY29tIiwicnVsZSI6IjEiLCJ1c2VyX2lkIjoxLCJpZF9jb21wYW55Ijo5MywiZmlyc3RfbmFtZSI6IkJlZXRBSSIsImxhc3RfbmFtZSI6IkFkbWluIn0sImV4cCI6MTU5NDg4ODc5MSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.Ptn7LEopSbnHQyPhGs23IuzsWiqveq_3CrlRJMqXo1k"
            },
            body: JSON.stringify({'id' : type.id})
        }).then((res) => {
            return res.json(type)
        })
        if (data.status === 10000 ) {
            var {activePage} = this.state
            if (this.state.typeDevice.length === 1) {
                activePage = activePage - 1
            }
            this.setState({
                activePage
            });
            this.getAll();          
            swal("Sucess!", "delete typeDevice Success!", "success", {
                buttons: false,
                timer: 1500,
            });
        }
        else {
            swal("Error!", "delete typeDevice Failed!", "error");
        }
    }

    render() {
        let bulleted = this.state.typeDevice.map((e, i) => {
            return (
                <tr key={(i + 1)}>
                    <td> {e.id} </td>
                    <td> {e.name} </td>
                    <td> {e.description} </td>
                    <td>
                    <button 
                        onClick= {() => {
                            var data = this.state.typeDevice
                            var type = {
                                id: data[i].id,
                                name: data[i].name,
                                description: data[i].description
                            }
                            this.setState({
                                crrTypeDevice: type,
                                showModal: true
                            });
                        }}
                        className="btn-edit" style={{ border: 'none', background: 'none' }} > <i class="fas fa-edit"> </i> </button>

<button
                        onClick = {(f) => {
                            f.preventDefault();
                            swal({
                                title: "Are you sure?",
                                text: "Are you sure that you want to delete device " + e.name,
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                            })
                            .then(will_delete => {
                                if (will_delete) {
                                    this.deleteTypeDevice(e)
                                }
                            })
                        }}
                         className="btn-edit" style={{ border: 'none', background: 'none' }} > <i class="fas fa-trash-alt"> </i> </button>
                    </td>
                </tr>
            )
        })
        return (
            <div className="m-grid__item m-grid__item--fluid m-wrapper">
                <div className="m-subheader ">
                    <div className="d-flex align-items-center">
                        <div className="mr-auto">
                            <h3 className="m-subheader__title m-subheader__title--separator">Basic Examples</h3>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                {/* END: Subheader */}
                <div className="m-content">
                    <div className="m-portlet m-portlet--mobile">
                        <div className="m-portlet__head">
                            <div className="row p-3 col-xl-10">
                                <div className="col-lg-2 m--margin-bottom-10-tablet-and-mobile">
                                    <input value={this.state.valueSearch} onChange={(e) => {this.handleChange(e)}} type="text" id="inputSearch" className="form-control m-input" placeholder="Name " data-col-index={0} />
                                </div>
                                <div>
                                    <button
                                        onClick={()=>{this.btnSearch(this.state.valueSearch)} }
                                        className="btn btn-accent m-btn m-btn--icon" id="m_search">
                                        <span>
                                            <i className="fas fa-search" />
                                            <span>Search</span>
                                        </span>
                                    </button>
                                </div>
                                <div className="col-lg-3">
                                    <button

                                        className="btn btn-secondary m-btn m-btn--icon" id="m_reset">
                                        <span>
                                            <i className="fas fa-sync" />
                                            <span>Reset</span>
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="m-portlet__head-tools">
                                <ul className="m-portlet__nav">
                                    <li className="m-portlet__nav-item">
                                        <button
                                            onClick={()=> {
                                                var type ={
                                                    name:'',
                                                    description:''
                                                }
                                                this.setState({
                                                    showModal: true,
                                                    crrTypeDevice: type
                                                });
                                            }}
                                            className="btn btn-accent m-btn m-btn--custom m-btn--icon m-btn--pill m-btn--air">
                                            <span>
                                                <i className="fas fa-plus" />
                                                <span>Thêm mới</span>
                                            </span>
                                        </button>

                                    </li>
                                    <li className="m-portlet__nav-item" />

                                </ul>
                            </div>
                        </div>
                        <div className="m-portlet__body">
                            {/*begin: Datatable */}
                            <table className="table table-striped- table-bordered table-hover table-checkable" id="m_table_1">

                                <thead>
                                    <tr>
                                        <th style={{ 'verticalAlign': 'middle' }}> ID </th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th style={{ 'width': '150px' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bulleted}
                                </tbody>
                            </table>
                            <Pagination
                                activePage = {this.state.activePage}
                                itemsCountPerPage = {this.itemsPerPage}
                                pageRangeDisplayed = {3}
                                totalItemsCount = {this.state.totalLenght}
                                onChange = {this.handlePageChange}
                            />
                            
                            <Modal
                                show={this.state.showModal}
                                onHide={this.close}
                                type={this.state.crrTypeDevice}
                            />

                        </div>
                    </div>
                    {/* END EXAMPLE TABLE PORTLET*/}
                </div>
            </div>
        );
    }
}

export default table2;