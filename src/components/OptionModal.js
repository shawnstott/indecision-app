import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        ariaHideApp={false}
        onRequestClose={props.handleCloseModal}
        shouldCloseOnEsc={true}>
        <h3>Select Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button
            onClick={props.handleCloseModal}>
            Ok
        </button>
    </Modal>
);

export default OptionModal;