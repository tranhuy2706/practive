import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import swal from 'sweetalert';

class table3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listEngineVersion: [],
            listEngine: [],
            allListEngine: [],
            activePage:1,
            totalLenght: 0,
            valueSearch : '',
            offSet: 0,
            dataEngine: []
        }
       this.itemsPerPage = 5;
    }

    getEngine = () => {
        fetch(`http://api.cms_dev.beetai.com/api/engine/getAll`, {
            method: "GET",
            headers: {
                'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTQyODM5OTEsIm5iZiI6MTU5NDI4Mzk5MSwianRpIjp7ImVtYWlsIjoiYWRtaW5AYmkuY29tIiwicnVsZSI6IjEiLCJ1c2VyX2lkIjoxLCJpZF9jb21wYW55Ijo5MywiZmlyc3RfbmFtZSI6IkJlZXRBSSIsImxhc3RfbmFtZSI6IkFkbWluIn0sImV4cCI6MTU5NDg4ODc5MSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.Ptn7LEopSbnHQyPhGs23IuzsWiqveq_3CrlRJMqXo1k"
            }
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.status === 10000) {
                this.setState({
                    listEngine: [data.data]
                });
            }
        })
    }

    getEngineVersion = () => {
        fetch(`http://api.cms_dev.beetai.com/api/engineVersion/getAll`, {
            method: 'GET',
            headers: {
                'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTQyODM5OTEsIm5iZiI6MTU5NDI4Mzk5MSwianRpIjp7ImVtYWlsIjoiYWRtaW5AYmkuY29tIiwicnVsZSI6IjEiLCJ1c2VyX2lkIjoxLCJpZF9jb21wYW55Ijo5MywiZmlyc3RfbmFtZSI6IkJlZXRBSSIsImxhc3RfbmFtZSI6IkFkbWluIn0sImV4cCI6MTU5NDg4ODc5MSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.Ptn7LEopSbnHQyPhGs23IuzsWiqveq_3CrlRJMqXo1k"
            }
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.status === 10000) {
                this.setState({
                    listEngineVersion: [data.data],
                    allListEngine: [...data.data]
                });
                this.filterEngine(this.state.activePage)
            }
        })
    }

    componentDidMount() {
        this.getEngineVersion();
        this.getEngine();
        this.filterEngine()
    }

    handlePageChange = (pageNumber) => {
        this.setState({
            activePage: pageNumber
        });
        this.filterEngine(pageNumber)
    }

    filterEngine = (activePage) =>{
        var searchBox = [];
        this.state.allListEngine.forEach((item) => {
            if (item.engine.name.toLowerCase().indexOf(this.state.valueSearch.toLowerCase()) !== -1) {
                searchBox.push(item)
            }
        })
        const offSet = (activePage -1) * this.itemsPerPage;
        const dataEngine = searchBox.slice(offSet, offSet + this.itemsPerPage)
        console.log(dataEngine)
        this.setState({
            offSet,
            dataEngine,
            totalLenght: searchBox.length
        });
    }

    btnSearch = () => {
        this.setState({
            activePage: 1
        });
        this.filterEngine(this.state.activePage);
    }

    
    isChange = (e) => {
        if (e.key === 'Enter'){
            this.btnSearch(e.target.value.trim())
        }
        this.setState({
            valueSearch: e.target.value.trim()
        });
    }

    reset = () => {
        this.setState({
            valueSearch: '',
            activePage: 1
        });
        this.getEngineVersion()
    }
    // Maximum update depth exceeded : xem lại Onclick = {(e) => {This.reset}
 
    deleteEngine = async (version, i) => {
        let data = await fetch(`http://api.cms_dev.beetai.com/api/engineVersion/delete`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTQyODM5OTEsIm5iZiI6MTU5NDI4Mzk5MSwianRpIjp7ImVtYWlsIjoiYWRtaW5AYmkuY29tIiwicnVsZSI6IjEiLCJ1c2VyX2lkIjoxLCJpZF9jb21wYW55Ijo5MywiZmlyc3RfbmFtZSI6IkJlZXRBSSIsImxhc3RfbmFtZSI6IkFkbWluIn0sImV4cCI6MTU5NDg4ODc5MSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.Ptn7LEopSbnHQyPhGs23IuzsWiqveq_3CrlRJMqXo1k"
            },
            body: JSON.stringify(version)           
        }).then((res) => {
            return res.json();
        })
        if (data.status === 10000) {
            swal("Deleted!", "You have successfully deleted!", "success", {
                buttons: false,
                timer: 1500,
            });
            this.getEngineVersion();
        }
        else {
            swal("Error!", "Delete Failed!", "error")
        }
    }
    
    render() {
        let bulletedEngineVersion = this.state.dataEngine.map((e, i) => {
            return (
                <tr key={(i + 1)}>
                    <td>{i + 1}</td>
                    <td>{e.id}</td>
                    <td>{e.engine.name}</td>
                    <td>{e.version}</td>
                    <td>{e.path}</td>
                    <td>
                        <button
                            className="btn-edit" style={{ border: 'none', background: 'none' }}><i class="fas fa-edit"> </i></button>
                        <button
                            onClick = {(v) => {
                                v.preventDefault()
                                swal({
                                    title: "Are you sure?",
                                    text: "Are you sure that you want to delete " + e.engine.name + '-' + e.version,
                                    icon: "warning",
                                    buttons: true,
                                    dangerMode: true,
                                })
                                .then(willDelete => {
                                    if(willDelete){
                                        this.deleteEngine()
                                    }
                                })
                            }}
                            className="btn-edit" style={{ border: 'none', background: 'none' }}><i class="fas fa-trash-alt"> </i></button>
                    </td>
                </tr>

            )
        })

        return (
            <div className="m-grid__item m-grid__item--fluid m-wrapper" >
                <div className="m-subheader ">
                    <div className="d-flex align-items-center">
                        <div className="mr-auto">
                            <h3 className="m-subheader__title m-subheader__title--separator">Engine Versions</h3>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                {/* END: Subheader */}
                <div className="m-content" >
                    <div className="m-portlet m-portlet--mobile">
                        <div className="m-portlet__head">
                            <div className="row p-3 col-xl-10">
                                <div className="col-lg-2 m--margin-bottom-10-tablet-and-mobile">
                                    <input onChange ={(e) => {this.isChange(e)}} onKeyUp = {(e) => {this.isChange(e)}} value={this.state.valueSearch} type="text" id="inputSearch" className="form-control m-input" placeholder="Name " data-col-index={0} />
                                </div>
                                <div>
                                    <button
                                        onClick = {(e) => {this.btnSearch(this.state.valueSearch)}}
                                        className="btn btn-accent m-btn m-btn--icon" id="m_search" >
                                        <span>
                                            <i className="fas fa-search" />
                                            <span>Search</span>
                                        </span>
                                    </button>
                                </div>
                                <div className="col-lg-3">
                                    <button
                                        onClick = {() => {this.reset()}}
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
                                        <th style={{ 'verticalAlign': 'middle' }}> STT </th>
                                        <th style={{ 'verticalAlign': 'middle' }}> ID </th>
                                        <th>Engine</th>
                                        <th>Version</th>
                                        <th>Path</th>
                                        <th style={{ 'width': '150px' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bulletedEngineVersion}
                                </tbody>
                            </table>
                            <Pagination
                            activePage = {this.state.activePage}
                            totalItemsCountPerPage = {this.itemsPerPage}
                            pageRangeDisplayed = {3}
                            totalItemsCount = {this.state.totalLenght}
                            onChange = {this.handlePageChange}
                            />

                        </div>
                    </div>
                    {/* END EXAMPLE TABLE PORTLET*/}
                </div>
            </div >
        );
    }
}

export default table3;  