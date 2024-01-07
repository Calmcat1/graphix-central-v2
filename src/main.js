import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';


const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/Solutions" element={<Solutions/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Portfolio" element={<Portfolio/>} />
      </Routes>
   </Router>
  );
}

export default Main;
