import React from 'react'

const Button = ({ randomAnecdotes }) => {
    return (
        <div>
            <button onClick={randomAnecdotes}>next anecdote</button>
        </div>
    )
}

export default Button