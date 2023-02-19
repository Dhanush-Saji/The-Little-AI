import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MobNavbar from './components/MobNavbar/MobNavbar';
import AllRoutes from './Routes/AllRoutes';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className='App'>
    <Navbar />
    <MobNavbar />
    <AllRoutes />
    <Footer />
    </div>
  );
}

export default App;
