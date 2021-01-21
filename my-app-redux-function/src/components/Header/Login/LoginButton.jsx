import React from "react";
import { connect } from "react-redux"
import { Modal, ModalBody } from 'reactstrap';
import { toogleModal } from '../../../redux/auth-reducer';
import LoginFormContainer from './LoginFormContainer';


let Login = (props) => {
    return (
      <div>
        <button
          className="btn btn-success"
          type="button"
          onClick={props.toogleModal}
        >
          Login
        </button>
        <Modal isOpen={props.showModal} toggle={props.toogleModal}>
          <ModalBody>
            <LoginFormContainer />
          </ModalBody>
        </Modal>
      </div>
    );
}

let mapStapeToProps = (state) => {
  return {
    showModal: state.auth.showModal,
  };
};

export default connect(mapStapeToProps, {
  toogleModal,
})(Login);