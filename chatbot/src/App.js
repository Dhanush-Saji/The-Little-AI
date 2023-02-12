import logo from './logo.svg';
import './App.module.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className='App'>
    <Navbar />
    <HomePage />
    </div>
  );
}

export default App;
