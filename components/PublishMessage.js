import React, { Component } from 'react';
import { PubSubContext } from '../pubsub';
import { newMessage } from '../actions/messages';

class PublishMessage extends Component {
    state = { text: ''};

    updateText = event => this.setState({ text: event.target.value });

    publishMessage = () => {
        this.context.pubsub.publish(newMessage(this.state.text));
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') this.publishMessage();
    }

    render() {
        console.log('this', this);

        return (
            <div>
                <h3>Got something to say?</h3>
                <input onChange={this.updateText} onKeyPress={this.handleKeyPress} />
                {' '}
                <button onClick={this.publishMessage}>Publish it!</button>
            </div>
        )
    }

    static contextType = PubSubContext;
} 

export default PublishMessage;