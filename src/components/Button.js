import React from 'react'

const Button = ({ randomAnecdotes, onPoints }) => {
    return (
        <div>
            <button onClick={onPoints}>vote</button>
            <button onClick={randomAnecdotes}>next anecdote</button>
        </div>
    )
}

export default Button