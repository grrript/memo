import { useState } from 'react'
import Child1 from './Child1'
import Child1Memoized from './Child1Memoized'

const MemoApp = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter((state) => {
      return state + 1
    })
  }

  return (
    <>
      <button onClick={handleClick}>Increment</button>
      <div>
        <p>
          Pressing the incrment button will cause only Child 1 to re-render, but
          not Child1Memoized
        </p>
      </div>
      <div>counter: {counter}</div>
      <Child1 />
      <Child1Memoized />
    </>
  )
}
export default MemoApp
