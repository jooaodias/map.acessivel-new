import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap'
import Question from '../Question/Question';

const ModalAnswer = (props) => {
    const { modal, setModal, activeLocal, calculation } = props;
    const toggle = () => setModal(!modal);
    console.log(activeLocal);
    // console.log(calculation)
    return (
        <Modal isOpen={modal} toggle={toggle} style={{maxWidth: '80vh'}}>
            <ModalHeader toggle={toggle}>{`${activeLocal.name} - ${activeLocal.city}`}</ModalHeader>
            <ModalBody>
                {activeLocal.description}
                <Question local={activeLocal} modal={modal} setModal={setModal}/>
            </ModalBody>
            <ModalFooter>
                
            </ModalFooter>
        </Modal>
    )
}

export default ModalAnswer
