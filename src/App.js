import './App.css';
import Header from './Header';
import Content from './Content'
import Footer from './Footer';
import { useState } from 'react'

function App() {
  const [show, setShow] = useState(false)
  const [showTwo, setShowTwo] = useState(false)

  return (
    <div className="App">
      <div>
      <Header />
      <Content 
      show={show}
      setShow={setShow}
      showTwo={showTwo}
      setShowTwo={setShowTwo}
      />
      <Footer />
      </div>
    </div>
  );
}

export default App;
