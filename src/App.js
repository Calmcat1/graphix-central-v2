import './App.css';
import {Navbar, MobileNavBar, Header, Content, Footer, CTA} from './components/imports'


function App() {
  return (
    <div className="App">
      <div className="maincontainer">
        <Navbar />
        <MobileNavBar />
        <CTA />
        <Content />
        <Footer /> 
      </div>
    {/* bootstrap scripts */}
    </div>
  );
}

export default App;
