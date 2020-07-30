import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import swal from 'sweetalert';

function TableHook(props) {

    const [listTypeDevice, setListTypeDevice] = useState({
        name: '',
        description: ''
    })

    function handleChange(e) {
        setListTypeDevice({
            ...listTypeDevice,
            [e.target.name]: e.target.value,
        })
    }
    console.log(listTypeDevice)
    const updateTypeDevice = async () => {
        console.log(listTypeDevice)
        if (listTypeDevice.id == undefined) {
            let data = await fetch(`http://api.cms_dev.beetai.com/api/type_device/insert_or_update`, {
                method: "POST",
                headers: {

                    'Content-Type': 'application/json',
                    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTM2NzgzNjQsIm5iZiI6MTU5MzY3ODM2NCwianRpIjp7ImVtYWlsIjoiYmlfYWdlbmN5QGdtYWlsLmNvbSIsInJ1bGUiOiIxIiwidXNlcl9pZCI6MTIwLCJpZF9jb21wYW55IjoxNCwiZmlyc3RfbmFtZSI6IkJJIiwibGFzdF9uYW1lIjoiQWdlbmN5In0sImV4cCI6MTU5NDI4MzE2NCwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.V8sQxmIVR8ExXItizWRAGxIQEoMsUXOskimlFdd0nYg"
                },
                body: JSON.stringify(listTypeDevice)
            }).then((res) => {
                return res.json();
            })
            if (data.status === 10000) {
                console.log(props.show)
                console.log(props.onHide())
                swal("Sucess!", "Add typeDevice Success!", "success", {
                    buttons: false,
                    timer: 1500,
                });
                
                return props.onHide()
            }
            else {
                swal("Error!", "Add typeDevice Failed!", "error");
            }
        }
        else {
            let data = await fetch(`http://api.cms_dev.beetai.com/api/type_device/insert_or_update`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTM2NzgzNjQsIm5iZiI6MTU5MzY3ODM2NCwianRpIjp7ImVtYWlsIjoiYmlfYWdlbmN5QGdtYWlsLmNvbSIsInJ1bGUiOiIxIiwidXNlcl9pZCI6MTIwLCJpZF9jb21wYW55IjoxNCwiZmlyc3RfbmFtZSI6IkJJIiwibGFzdF9uYW1lIjoiQWdlbmN5In0sImV4cCI6MTU5NDI4MzE2NCwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.V8sQxmIVR8ExXItizWRAGxIQEoMsUXOskimlFdd0nYg"
                },
                body: JSON.stringify(listTypeDevice)
            }).then((res) => {
                return res.json()
            })
            if (data.status === 10000) {
                
                swal("Sucess!", "Update typeDevice  Success!", "success", {
                    buttons: false,
                    timer: 1500,
                });
                return props.onHide()
            }
            else {
                swal("Error!", "Update typeDevice Failed!", "error");
            }
        }
    }

    

    return (
        <Modal show={props.show} onHide={props.onHide()} >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form id="formAddDepartment">
                    <div className="col-xl-12">
                        <div className="m-widget14">
                            <div className="form-group m-form__group">
                                <label htmlFor="Name"> Name <span className="text-danger"> * </span></label>
                                <input onChange={(e) => { handleChange(e) }} value={listTypeDevice.name} className="form-control m-input" id="Name" name='name' required />
                            </div>
                            <div className="form-group m-form__group">
                                <label htmlFor="Description"> Description </label>
                                <textarea onChange={(e) => { handleChange(e) }} value={listTypeDevice.description} rows="4" className="form-control m-input" id="Description" name="description" />
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>{updateTypeDevice()}} variant="accent" id="button_addDepartment" className="m-loader--light m-loader--right"> Save </Button>
                <Button onClick={props.onHide()} variant="secondary" > Close </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default TableHook;