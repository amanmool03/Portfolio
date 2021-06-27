
import React, { useEffect, useRef, useState } from 'react';
import { HashRouter as Router, Switch, Route, Link, useParams } from "react-router-dom"

import './styles/App.scss';
import logo from './images/logo.png'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import FeaturedWork from './components/FeaturedWork';
import { featuredWithSlug } from './db/db';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './CustomCursor/CustomCursor';




function App() {

  const [preloader, setPreloader] = useState(true);



  const [timer, setTimer] = useState(2);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  }


  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(timer => timer - 1)
    }, 1000)
  }, [])

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer])



  if (preloader) {
    return (
      <div className='loader-wrapper absolute'>
        <img src={logo} alt="" />
        {/* <h1>Aman Mool</h1> */}
      </div>
    );
  }

  return (

    <Router>
      <CustomCursor />

      <div className="main-container" id='mainContainer' data-scroll-section>
        <ScrollToTop />
        <Navbar />
        <Switch >
          <Route path="/" exact component={Hero} />
          <Route path="/playground" component={playground} />
          <Route path="/:slug" component={FeaturedWork} />
          <Route path="*" component={notfound} />
        </Switch>
        <Gallery />
        <Footer />
      </div>
    </Router>

  );
}


const notfound = () => {
  return (
    <div>Not found</div>
  );
}


// const FeaturedWork = () => {

//   const { slug } = useParams();
//   const work = featuredWithSlug[slug];

//   if (!work) {
//     return <h2>Not Found</h2>

//   }

//   return <div style={{ padding: "100px" }}>
//     <h2>{work.title}</h2>
//     <p>{work.info}</p>
//     <img src={work.imageUrl} alt="" />
//   </div>
// }



const playground = () => {
  return (
    <div style={{ padding: '120px 0', width: '90%', margin: ' 0 auto', height: '100vh' }}>
      <p>This is playground</p>
    </div>
  );

}



export default App;
