import './App.css';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import SecondSection from './components/SecondSection';

function App() {
  return (
    <div className="App">
        <Header/>
        <Home />
        <Nav/>
        <SecondSection/>
    </div>
  );
}

export default App;
