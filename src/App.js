import React, { Component } from 'react';
import axios from 'axios';

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
            openingPopup: false,
            popupData: ''
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
        axios.post('/api/ping-pong', {data: this.state.value})
            .then(({data}) => {
                this.setState({popupData: data.data});
            })
            .catch(err => {
                this.setState({popupData: err.message});
            })
    }

    resetOpeningPopup() {
        this.setState({
            openingPopup: false,
            popupData: ''
        });
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
                    data={this.state.popupData}
                    openingPopup={this.state.openingPopup}
                    resetOpeningPopup={this.resetOpeningPopup}
                />
            </Container>
        );
    }
}

export default App;
