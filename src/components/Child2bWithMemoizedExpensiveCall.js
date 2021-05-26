import { useMemo } from 'react'

/* because of useMemo, child3 will not re-render */
const Child2bWithMemoizedExpensiveCall = () => {
  console.log(
    'Child2bWithMemoizedExpensiveCall is always being re-rendered because memo is not used on the component.'
  )

  // computing the number is done only once
  // because it has no dependency.
  const memoizedNumber = useMemo(() => {
    console.log(
      'Child2bWithMemoizedExpensiveCall is making an expesive call...'
    )
    let output = 0
    for (let i = 0; i < 500000000; i++) {
      output++
    }
    return output
  }, [])

  return (
    <>
      <div>Child2bWithMemoizedExpensiveCall makes an expensive call...</div>
      <div> memoized number: {memoizedNumber}</div>
    </>
  )
}
export default Child2bWithMemoizedExpensiveCall
