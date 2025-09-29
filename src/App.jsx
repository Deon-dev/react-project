
import './App.css'

function App() {
  const subject = "Deonthedeveloper";

  return (
    <>
      <h1>Welcome to my Trial run React App</h1>
      <button type="button" className='primary'>Click on me</button>

      <p>Hello, {subject}</p>
      <p>Hello, {subject.toUpperCase()}</p>
    </>
  )
}

export default App
