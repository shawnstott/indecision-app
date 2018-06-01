import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        ariaHideApp={false}
        onRequestClose={props.handleCloseModal}
        shouldCloseOnEsc={true}
        closeTimeoutMS={200}
        className="modal">
        <h3 className="modal__title">Select Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button
            onClick={props.handleCloseModal}
            className="button">
            Ok
        </button>
    </Modal>
);

export default OptionModal;