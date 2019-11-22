import React from 'react';
import ScrollToTop from 'react-scroll-up';

import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import up from './images/up.png';

import appStyles from './styles/App.module.scss';

const App = () => { 
  
  return (
    <div className={appStyles.container}>        
        <ScrollToTop 
          duration={600} 
          showUnder={700}
          style={{right: 30, bottom: 30}}
        >
            <img alt="scroll to top" src={up} />
        </ScrollToTop>       
        <Header />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
