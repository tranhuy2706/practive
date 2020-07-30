import React, { useState, useEffect } from 'react';
import TableHook from '../Model/TableHook';
import Pagination from "react-js-pagination";

function Hook() {
    const [activePage, setActivePage] = useState(1)
    const [itemsPersPage, setItemsPerPage] = useState(3)
    const [totalLenght, setTotalLenght] = useState(0)
    const [offSet, setOffSet] = useState(0)
    const [crrTypeDevice, setCrrTypeDevice] = useState([])
    const [showTable, setShowTable] = useState(false);
    const modelClose = () => {
        console.log('1')
        setShowTable(false);
        getTypeDevice();
    }

    const [listTypeDevice, setListTypeDevice] = useState([]);
    function getTypeDevice() {
        fetch(`http://api.cms_dev.beetai.com//api/type_device/get_all`, {
            method: 'GET',
            headers: {
                'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTQyODM5OTEsIm5iZiI6MTU5NDI4Mzk5MSwianRpIjp7ImVtYWlsIjoiYWRtaW5AYmkuY29tIiwicnVsZSI6IjEiLCJ1c2VyX2lkIjoxLCJpZF9jb21wYW55Ijo5MywiZmlyc3RfbmFtZSI6IkJlZXRBSSIsImxhc3RfbmFtZSI6IkFkbWluIn0sImV4cCI6MTU5NDg4ODc5MSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.Ptn7LEopSbnHQyPhGs23IuzsWiqveq_3CrlRJMqXo1k"
            },
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.status === 10000) {
                setListTypeDevice(data.data)
            }
        })
    }
    console.log(listTypeDevice)

    useEffect(() => {
        filterTypeDevice()
    }, [listTypeDevice])

   
    function filterTypeDevice() {
        
        const index = (activePage -1) * itemsPersPage
        const allTypeDevice = listTypeDevice.slice(index, index + itemsPersPage)
        setCrrTypeDevice(allTypeDevice)
        setOffSet(index)
        setTotalLenght(listTypeDevice.length)
    }


    useEffect(() => {
        getTypeDevice()
    }, [])

    function handlePageChange(pageNumber){
        setActivePage(pageNumber)
        getTypeDevice()
    }
    console.log(crrTypeDevice)
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
                                <inpu type="text" id="inputSearch" className="form-control m-input" placeholder="Name " data-col-index={0} />
                            </div>
                            <div>
                                <button
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
                                        onClick={() => { setShowTable(true) }}
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
                                {crrTypeDevice.map((e, i) => {
                                    return (
                                        <tr key={(i + 1)}>
                                            <td>{e.id}</td>
                                            <td>{e.name}</td>
                                            <td>{e.description}</td>
                                            <td>
                                                <button className="btn-edit" style={{ border: 'none', background: 'none' }} > <i class="fas fa-edit"> </i> </button>
                                                <button className="btn-edit" style={{ border: 'none', background: 'none' }} > <i class="fas fa-trash-alt"> </i> </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            <TableHook
                                show={showTable}
                                onHide = {() => modelClose}
                            />
                        </table>
                        <Pagination
                        activePage={activePage}
                        itemsCountPerPage={itemsPersPage}
                        totalItemsCount={totalLenght}
                        pageRangeDisplayed={3}
                        onChange={()=>{handlePageChange()}}
                        />
                    </div>
                </div>
                {/* END EXAMPLE TABLE PORTLET*/}
            </div>
        </div>
    );
}

export default Hook;