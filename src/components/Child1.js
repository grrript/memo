/* 
  Child 1 will re-render UNNECCSARILY every time 
  the parent component MemoApp needs to re-render.
  See Child2 on how to fix this.
  */
const Child1 = () => {
  console.log('Child 1 is being rendered')
  return <div>Child 1</div>
}
export default Child1
