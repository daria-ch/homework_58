import React, {Component} from 'react';
import './App.css';
import Button from "./components/UI/Button/Button";
import Modal from "./components/UI/Modal/Modal";
import Alert from './components/UI/Alert/Alert';


class App extends Component {
    state = {
        openModal: false,
        openAlert: false
    };

    showModal = () => {
        this.setState({openModal: true})
    };

    closeModal = () => {
        this.setState({openModal: false})
    };

    continued = () => {
        alert('You are continued')
    };

    showAlert = () => {
        this.setState({openAlert: true})
    };

    closeAlert = () => {
        this.setState({openAlert: false})
    };


    render() {
        const BUTTONS = [
            {type: 'btn-primary', label: 'Continue', clicked: this.continued},
            {type: 'btn-danger', label: 'Close', clicked: this.closeModal}
        ];

        const buttons = BUTTONS.map(button => {
                return (
                    <Button
                        key={button.type}
                        type={button.type}
                        onClick={button.clicked}
                    >
                        {button.label}
                    </Button>
                )
            }
        );

        return (
            <div className='App'>
                <Button
                    onClick={this.showModal}
                    type='btn-danger'
                >MODAL</Button>
                <Button
                    onClick={this.showAlert}
                    type='btn-success'
                >ALERT</Button>
                <Modal
                    show={this.state.openModal}
                    close={this.closeModal}
                    closeX={this.closeModal}
                    title="Some kinda modal title"
                >
                    <p>This is modal content</p>
                    <div>{buttons}</div>
                </Modal>
                <Alert
                    show={this.state.openAlert}
                    type='alert-warning'
                    dismiss={this.closeAlert}
                >
                    This is a warning type alert
                </Alert>
            </div>
        );
    }
}

export default App;



