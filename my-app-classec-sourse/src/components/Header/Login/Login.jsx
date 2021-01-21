import React, { Component } from "react";
import { Modal, ModalBody } from 'reactstrap';
import LoginForm from './LoginForm';

export default class Login extends Component {
  constructor(){
    super();
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState(prevStaste => ({
      showModal: !prevStaste.showModal
    }))
  }

  render() {
    return (
      <div style={{marginRight: "20px"}}>
        <button
          className="btn btn-success"
          type="button"
          onClick={this.toggleModal}
        >
          Login
        </button>
        <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
          <ModalBody>
            <LoginForm />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
