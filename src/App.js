import { FaOtter } from 'react-icons/fa';
import About from './About';
import './App.css';
import Contact from './Contact';
import Header from './Header';
import Logo from './Logo';
import Service from './Service';
import Footer from './Footer'
import Pricing from './Pricing';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Router>
    <>
      <Switch>

      <Route path="/" exact>
     
           <Header/>
          <Logo/>
           <About/>
          <Service/>
         <Pricing/>
         <Contact/>
        <Footer/>
      </Route>
   
        <Route path="/logo">
          <Header/>
          <Logo/>
          <Footer/>       
        </Route>

        <Route  path='/about'>
        <Header/>
          <About/>
          <Footer/>
        </Route>
             

     
        <Route  path='/service'>
        <Header/>
          <Service/>
          <Footer/>
        </Route>



        <Route  path='/contact'>
        <Header/>
          <Contact/>
          <Footer/>
        </Route>
        
        <Route  path='/pricing'>
        <Header/>
          <Pricing/>
          <Footer/>
        </Route>
        
        <Route  path='/footer'>
        <Header/>
          <Footer/>
          
        </Route>

           </Switch> 
  </>
    </Router>
       

  );
}

export default App;