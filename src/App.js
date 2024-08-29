import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navigationbar from './NavigationBar';
import Header from './Pages/Header';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import Team from './Pages/Team';
import Contact from './Pages/Contact';

function App() {
  //test111
  return (
    <div className="App">
        <Navigationbar/>
        <Header/>
        <Routes>
          <Route path='/services' element={<Services/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/> 
          <Route path='/about' element={<About/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/contact' element={<Contact/>}/> 
        </Routes>
  
    </div>
  );
}

export default App;
