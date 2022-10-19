import { useState } from 'react'
import LogoSection from './LogoSection';
import ClickTracker from './ClickTracker';
import Messages from './Messages';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LogoSection />
      <ClickTracker count={count} handleClick={setCount} />
      <Messages />
    </div>
  )
}

export default App
