import React, { useState } from 'react'
import Button from './Button'
import DisplayPopularAnecdote from './DisplayPopularAnecdote'

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  console.log(points)

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <Button randomAnecdotes={() => setSelected(Math.floor(Math.random() * anecdotes.length))}
        onPoints={() => setPoints(points.map((point, index) => index === selected ? points[index] = point + 1 : point))}
      />
      <DisplayPopularAnecdote anecdotes={anecdotes} points={points} />
    </div>
  )
}

export default App;