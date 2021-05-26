import { memo } from 'react'

/* because of memo, child2 will not re-render */
const Child1Memoized = () => {
  console.log('Child1Memoized is being rendered')

  return <div>Child 1 memoized</div>
}
export default memo(Child1Memoized)
