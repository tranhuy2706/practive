import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import swal from 'sweetalert';


class AddTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeDevice : {
                name: '',
                description: ''
            }
        }


    }

    updateTypeDevice = async (type) => {
        if (type.id == undefined) {
            let data = await fetch(`http://api.cms_dev.beetai.com/api/type_device/insert_or_update`, {
                method: "POST",
                headers: {

                    'Content-Type': 'application/json',
                    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTM2NzgzNjQsIm5iZiI6MTU5MzY3ODM2NCwianRpIjp7ImVtYWlsIjoiYmlfYWdlbmN5QGdtYWlsLmNvbSIsInJ1bGUiOiIxIiwidXNlcl9pZCI6MTIwLCJpZF9jb21wYW55IjoxNCwiZmlyc3RfbmFtZSI6IkJJIiwibGFzdF9uYW1lIjoiQWdlbmN5In0sImV4cCI6MTU5NDI4MzE2NCwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.V8sQxmIVR8ExXItizWRAGxIQEoMsUXOskimlFdd0nYg"
                },
                body: JSON.stringify(type)
            }).then((res) => {
                return res.json()
            })
            if (data.status === 10000) {
                
                swal("Sucess!", "Add typeDevice Success!", "success", {
                    buttons: false,
                    timer: 1500,
                });
                return this.props.onHide()
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
                body: JSON.stringify(type)
            }).then((res) => {
                return res.json()
            })
            if (data.status === 10000) {
                swal("Sucess!", "Update typeDevice  Success!", "success", {
                    buttons: false,
                    timer: 1500,
                });
                return this.props.onHide()
            }
            else {
                swal("Error!", "Update typeDevice Failed!", "error");
            }
        }
    }

    handleChange = (e) => {
        var typeDeviceHandle = this.state.typeDevice
        typeDeviceHandle[e.target.name] = e.target.value
        this.setState({
            typeDevice: typeDeviceHandle
        });
        console.log(typeDeviceHandle)
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.show === true) {
            this.setState({
                typeDevice: nextProps.type
            });
        }   
    }


    render() {
        let clickHandle = () => {
            this.updateTypeDevice(this.state.typeDevice)
        }
        return (

            <Modal show={this.props.show} onHide={this.props.onHide}  >
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
                                    <input onChange={(e) => { this.handleChange(e) }} value={this.state.typeDevice.name} className="form-control m-input" id="Name" name='name' required />
                                </div>
                                <div className="form-group m-form__group">
                                    <label htmlFor="Description"> Description </label>
                                    <textarea onChange={(e) => { this.handleChange(e) }} value={this.state.typeDevice.description} rows="4" className="form-control m-input" id="Description" name="description" />
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={clickHandle} variant="accent" id="button_addDepartment" className="m-loader--light m-loader--right"> Save </Button>
                    <Button onClick={this.props.onHide} variant="secondary" > Close </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AddTable;