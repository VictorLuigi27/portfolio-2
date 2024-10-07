// Ici je rassemblerai tout les components de mon site
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about'
import Header from './components/header'
import Home from './components/home'
import LinkBar from './components/linkBar'
import Portfolio from './components/portfolio';
import './index.css'
import BestOf from './components/bestOf';


export default function App() {
  return (
      <Router>
          <Header />  
          <LinkBar />
          
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/bestOf" element={<BestOf />} />
          </Routes>
      </Router>
  );
}


