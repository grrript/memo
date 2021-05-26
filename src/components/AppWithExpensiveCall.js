import { useState } from 'react'

import Child2aWithExpensiveCall from './Child2aWithExpensiveCall'

const AppWithExpensiveCall = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter((state) => {
      return state + 1
    })
  }

  return (
    <>
      <button onClick={handleClick}>Increment</button>
      <h3>Notice it takes time for counter to update:</h3>
      <div>counter: {counter}</div>
      <Child2aWithExpensiveCall />
    </>
  )
}
export default AppWithExpensiveCall
