import React from 'react'

const DisplayPopularAnecdote = ({ anecdotes, points }) => {
    let mostVotes = 0
    for (let i = 1; i < anecdotes.length; i++) {
        if (points[i] > points[mostVotes])
            mostVotes = i
    }

    return (
        <div>
            <h2>Anecdote with most votes</h2>
            <p>{anecdotes[mostVotes]}</p>
        </div>
    )
}

export default DisplayPopularAnecdote