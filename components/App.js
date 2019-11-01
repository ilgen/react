import React, { Component } from 'react';
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';

class App extends Component {
    render() {
        return (
            <div>
                <h2>Reaction</h2>
                <hr />
                <PublishMessage />
                <hr />
                <MessageBoard />
            </div>
        );
    }
}


export default App;