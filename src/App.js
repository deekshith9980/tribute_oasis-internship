import './App.css';
import About from './components/about/About';
import Companies from './components/companies/Companies';
import Future from './components/future/Future';
import Header from './components/Header';
import Home from './components/home/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Future />
      <Companies />
    </div>
  );
}

export default App;
