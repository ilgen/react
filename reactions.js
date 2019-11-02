import { REACTION_OBJECTS } from '../actions/types';

const REACTION_TYPES = REACTION_OBJECTS.map(
    REACTION_OBJECTS => REACTION_OBJECTS.type
);

const reactionsReducer = (state = {}, action) => {
    if (REACTION_TYPES.includes(action.type)) {

        const messageReactions = state[messageId];

        if (messageReaction) {
            return {...state, [messageId]: [...messageReactions, action.item] }
        }

        return {...state, [messageId]: [action.item] };
    }

    return state;
};

export default reactionsReducer; 