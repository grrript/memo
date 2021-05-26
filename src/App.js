import './App.css'
import AppWithoutAndWithMemo from './components/AppWithoutAndWithMemo'
import AppWithExpensiveCall from './components/AppWithExpensiveCall.js'
import AppWithMemoizedExpensiveCall from './components/AppWithMemoizedExpensiveCall.js'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <AppWithoutAndWithMemo />
        <div>--------------------------------------------------</div>
        <AppWithExpensiveCall />
        <div>--------------------------------------------------</div>
        <AppWithMemoizedExpensiveCall />
      </header>
    </div>
  )
}

export default App
