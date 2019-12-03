import React, {Fragment} from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => (
    <Fragment>
        <Backdrop
            show={props.show}
            onClick={props.close}
        />
        <div className='Modal' style={{
            transform: props.show ? 'translateY(0)' : 'TranslateY(-100vh',
            opacity: props.show ? '1' : '0'
        }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                        <button type="button" className="close">
                            <span onClick={props.closeX}>X</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
);

export default Modal;