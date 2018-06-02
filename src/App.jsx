import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    render() {
        return (
            <div className="border">
                <h2>Hello World</h2>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));
