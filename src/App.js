import React, { Component } from 'react';

import './App.css';
import {Input, Button, Container, Result} from './components';

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }
    
    render() {
        return (
            <div className="App">
                <Container>
                    <div className="form-row">
                        <Input
                            onChange={this.handleChange}
                            name="data"
                        />
                        <Button text="Submit" />
                    </div>
                    <Result text={this.state.value} />
                </Container>
            </div>
        );
    }
}

export default App;
