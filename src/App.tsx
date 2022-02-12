import Navbar from './components/Navbar'
import Home from './pages/Home'
import FooterSection from './components/FooterSection'

function App() {


  return (
    <div>
      <Navbar />
      <div className='container main'>
        <Home/>
      </div>
      <FooterSection />
    </div>
  )
}

export default App
