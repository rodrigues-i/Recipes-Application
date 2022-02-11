import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {


  return (
    <div>
      <Navbar />
      <div className='container main'>
        <Home/>
      </div>
    </div>
  )
}

export default App
