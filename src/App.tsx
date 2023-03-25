import Treemap from './charts/Treemap'
import data from './data'
import './App.css'
import Navbar from './components/Layout'
import Card from '@mui/material/Card';
import OutlinedCard from './components/card';
import Heropage from './components/heropage';
import WordCloud from './components/wordcloud';
import { ReactDOM } from 'react';
function App() {
  return (
    <div className="App">
      <div className="bg-no-repeat min-h-screen w-full">
          <body className="bg-auto bg-no-repeat min-h-screen w-full " >
          <div className="min-h-screen min-w-full">
          <div className="relative isolate px-6 pt-0 lg:px-8 ">
          <Navbar/>
            <Heropage/>
            <div className="grid grid-cols-2 gap-4">
              <OutlinedCard/>
              </div>
            <div className="grid grid-cols-1 gap-4 place-items-center pt-5">
              <WordCloud/>
              <Treemap data={data} height={400} width={600} />
              </div>
            
              </div>
            </div>
          </body>
        </div>
      </div>
    
  )
}

export default App
