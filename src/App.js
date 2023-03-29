import Navbar from './Components/Navbar.js';
import Carousel from './Components/Carousel.js';
import About from './Components/About.js';
import Pizzatypes from './Components/Pizzatypes.js';
import './App.css';
import Footer from './Components/Footer.js';



function App() {
  return (
    <div>
     <Navbar />
     <Carousel />
     <About />
     <Pizzatypes />
      <Footer />
    </div>
  );
}

export default App;
