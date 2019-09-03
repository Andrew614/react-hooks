import React, { useState } from 'react'
import Button from './Button'

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)

  return (
    <div>
      {anecdotes[selected]}
      <Button randomAnecdotes={() => setSelected(Math.floor(Math.random() * anecdotes.length))} />
    </div>
  )
}

export default App;