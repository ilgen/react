import React from 'react';
import { connect } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../actions/settings';

const Instructions = props => {
    const { instructionsExpanded, expandInstructions, collapseInstructions } = props;

    if(instructionsExpanded) {
        return (
            <div>
                <h3>Instructions</h3>  
                <p>Welcome: the game goes like this... </p>
                <p>First - the deck is shuffled.</p>
                <p>Next - you must chose if the next card is even or odd.</p>
                <p>Then - make a choice on every draw, and see how many you can guess correctly!</p>
                <p>(Face cards don't count)</p>
                <p>🥇</p>
                <br />
                <button onClick={collapseInstructions}>Show Less</button>
            </div>
        );
    }

    return (
        <div>
            <h3>Instructions</h3>
            <p>Welcome: the game goes like this...</p>
            <button onClick={expandInstructions}>Read More</button>
        </div>
    )
}


export default connect(
    state => ({ instructionsExpanded: state.settings.instructionsExpanded }),
    { expandInstructions, collapseInstructions }
)(Instructions);