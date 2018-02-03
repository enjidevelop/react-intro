import React, { Component } from 'react';

import './App.css';
import {Input, Button, Container} from './components';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <Input />
                    <Button text="Submit" />
                    <div className="result"></div>
                </Container>
            </div>
        );
    }
}

export default App;
