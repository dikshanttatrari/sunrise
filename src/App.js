import './App.css'
import About from './pages/About';
import Announcement from './pages/Announcement';
import Classes from './pages/Classes';
import Footer from './pages/Footer';
import Gallery from './pages/Gallery';
import Main from './pages/Main';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Announcement/>
      <Main/>
      <About/>
      <Gallery/>
      <Classes/>
      <Footer/>
    </div>
  );
}

export default App;
