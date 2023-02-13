import logo from './logo.svg';
import './App.module.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import MobNavbar from './components/MobNavbar/MobNavbar';

function App() {
  return (
    <div className='App'>
    <Navbar />
    <MobNavbar />
    <HomePage />
    </div>
  );
}

export default App;
