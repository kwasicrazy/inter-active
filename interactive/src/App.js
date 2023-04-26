
import './App.css';
import Footer from './Footer';
import Hero from './Hero';
import Nav from './Nav';
import Demo from './Demo'

function App() {
  return (
    <div className="App">
      <Router>
      
     <Nav/>
     <Hero/>
     <Footer/>
     <Demo/>
     
    </div>
  );
}

export default App;
