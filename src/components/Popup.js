import React from 'react';

class Popup extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps({openingPopup, resetOpeningPopup}) {
        if (openingPopup) {
            this.setState({isOpen: true});
            resetOpeningPopup();
        }
    }

    handleClick(e) {
        if (e.target.classList.contains('overlay')) {
            this.setState({
                isOpen: false
            });
        }
    }

    render() {
        return (
            <div
                className={this.state.isOpen ? "overlay isOpen" : "overlay"}
                onClick={this.handleClick}
            >
                <div className="popup">Test</div>
            </div>
        );
    }
};

export default Popup;
