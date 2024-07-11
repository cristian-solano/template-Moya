import './App.css';
import Navbar from './Componentes/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './Pages/Principal';
import Footer from './Componentes/Footer';

function App() {
  return (
    <Router>
      <div className='container'> 
        <div className='navbar'>
            <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Principal/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
