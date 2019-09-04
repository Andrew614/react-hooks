import React from 'react'

const Button = ({ randomAnecdotes, handleVotes }) => {
    return (
        <div>
            <button onClick={handleVotes}>vote</button>
            <button onClick={randomAnecdotes}>next anecdote</button>
        </div>
    )
}

export default Button