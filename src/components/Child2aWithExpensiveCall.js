import { useMemo } from 'react'

/* because of useMemo, child3 will not re-render */
const Child2aWithExpensiveCall = () => {
  console.log(
    'Child 2a is always being re-rendered because memo is not used on the component.'
  )

  const expensiveCall = () => {
    console.log('child2a is making an expesive call...')
    let output = 0
    for (let i = 0; i < 500000000; i++) {
      output++
    }
    console.log('child2a is finished making an expesive call...')

    return output
  }
  const expensiveNumber = expensiveCall()

  return (
    <>
      <div>Child 2a makes an expensive call...iterate 5000000000 times.</div>
    </>
  )
}
export default Child2aWithExpensiveCall
