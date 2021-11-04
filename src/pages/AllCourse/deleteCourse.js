import React from 'react'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Row,
    Col
} from 'reactstrap';

const DeleteCourse = ({ modals, setModalDelete }) => {
    return (
        <div>
            <Modal isOpen={modals} toggle={setModalDelete}>
                <ModalHeader toggle={setModalDelete}> Delete Confirmation </ModalHeader>
                <ModalBody>
                    <p className="py-4 text-center text-purple text-uppercase"> Are you sure to delete ? </p>

                    <div className="d-flex flex-sm-row justify-content-between">
                        <Button onClick={setModalDelete} className="bg-transparent text-purple">
                            CANCEL
                        </Button>
                        <Button className="bg-purple">
                            <span >
                                DELETE
                            </span>
                        </Button>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default DeleteCourse
