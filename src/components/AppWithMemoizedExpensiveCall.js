import { useState } from 'react'
import Child2bWithMemoizedExpensiveCall from './Child2bWithMemoizedExpensiveCall'

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
      <h3>
        The function that makes an expensive call is now memoized. It will not
        run more than once. The counter will now update instantly.
      </h3>
      <div>counter: {counter}</div>

      <Child2bWithMemoizedExpensiveCall />
    </>
  )
}
export default AppWithExpensiveCall
