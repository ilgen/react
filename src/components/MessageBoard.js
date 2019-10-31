import React from 'react';
import { connect } from 'react-redux';
import CreateReaction from './CreateReaction';


const MessageReactions = ({ messageReactions }) => {
    if(!messageReactions) return null;
    return (
        <div>
          {
        messageReactions.map((reaction, index) => {

            const { type, emoji, username, messageId } = reaction;

            return (
                <span key={id}>
                    <em>{username}:</em>{' '}
                    {emoji}
                    {index !== messageReactions.length -1 ? ', ' : null}
                </span>
            )
        })
    }
    </div>
    )
}

const MessageBoard = ({ messages, reactions }) => {
        if (!messages) return null;
    return (
      <div>
          {
              messages.items.map(messageItem => {
                  const { id, text, timestamp, username } = messageItem;

                  return (
                      <div key={id}>
                          <h4>{new Date(timestamp).toLocaleString()}</h4>
                          <p>{text}</p>
                          <h4>- {username}</h4>
                          <CreateReacton messageId={id} />
                          <MessageReactions messageReactions={reactions[id]} />
                          <hr />
                          </div>
                  )
              })
          }
      </div>
  )
}


export default connect (
    ({messages, reactions }) => {( messages, reactions )}
)(MessageBoard);