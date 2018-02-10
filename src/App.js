import React, { Component } from 'react';

import './App.css';
import {
    Input,
    Button,
    Container,
    Result,
    Popup
} from './components';

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            openingPopup: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetOpeningPopup = this.resetOpeningPopup.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({openingPopup: true});
    }

    resetOpeningPopup() {
        this.setState({openingPopup: false});
    }

    render() {
        return (
            <Container>
                <form
                    onSubmit={this.handleSubmit}
                    className="form"
                >
                    <div className="form-row">
                        <Input
                            onChange={this.handleChange}
                            name="data"
                        />
                        <Button text="Submit" />
                    </div>
                </form>
                <Result text={this.state.value} />
                <Popup
                    openingPopup={this.state.openingPopup}
                    resetOpeningPopup={this.resetOpeningPopup}
                />
            </Container>
        );
    }
}

export default App;
