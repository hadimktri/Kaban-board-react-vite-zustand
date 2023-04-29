import './App.css'
import Column from './assets/component/Column'

function App() {
  return (
    <div className='App'>
      <Column state={'Planning'} />
      <Column state={'OnGoing'} />
      <Column state={'Done'} />
    </div>
  )
}
export default App
