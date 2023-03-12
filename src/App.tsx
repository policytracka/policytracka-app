import Treemap from './charts/Treemap'
import data from './data'
import './App.css'

function App() {
  return (
    <div className="App">
      <Treemap data={data} height={400} width={600} />
    </div>
  )
}

export default App
