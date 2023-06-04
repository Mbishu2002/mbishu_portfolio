import './App.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Experience from './components/Experience/experience'
import Services from './components/services/services'
// import Portfolio from './components/portfolio/portfolio'
// import Testimonial from './components/Testimonials/Testimonials'
import Contact from './components/Contact/contact'
import Footer from './components/footer/footer'
function App() {

return (
  <>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Services/>
    {/* <Portfolio/>
    <Testimonial/> */}
    <Contact/>
    <Footer/>
  </>
  );
}

export default App;
