
import About from './About/About';
import './App.css';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Project from './Project/Project';
import Service from './Service/Service';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
      <Service></Service>
      <Project></Project>
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
