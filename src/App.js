import './App.css';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import SecondSection from './components/SecondSection';
import Collection from './components/Collection';
import Contact from './components/Contact';

function App() {
  return (
    <div className = "App" >
      <Header />
      <Home />
      <Nav />
      <SecondSection />
      <Collection />
      <Contact/>
    </div>
  );
}

export default App;
