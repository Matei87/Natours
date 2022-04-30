import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Tours from './components/Tours/Tours';
import HomePage from './components/HomePage/HomePage';
import SeaExplorer from './components/Tours/components/SeaExplorer/SeaExplorer';
import MountainBiker from './components/Tours/components/MountainBiker/MountainBiker';
import SnowAdventurer from './components/Tours/components/SnowAdventurer/SnowAdventurer';
import ParkCamper from './components/Tours/components/ParkCamper/ParkCamper';
import CityWonderer from './components/Tours/components/CityWonderer/CityWonderer';
import StarGazer from './components/Tours/components/StarGazer/StarGazer';
import WineTaster from './components/Tours/components/WineTaster/WineTaster';
import NorthernLights from './components/Tours/components/NorthernLights/NorthernLights';
import ForestHiker from './components/Tours/components/ForestHiker/ForestHiker';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Terms from './components/Terms/Terms';
import Footer from './components/Footer/Footer';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'animate.css/animate.min.css';
import { WOW } from 'wowjs';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

class App extends React.Component {
  componentDidMount() {
    new WOW().init();
  }

  render() {
    document.title = 'Natours | All Tours';

    return (
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />

          <Route exact path='/tours' element={<Tours />} />

          <Route
            exact
            path='/tours/the-sea-explorer'
            element={<SeaExplorer />}
          />

          <Route
            exact
            path='/tours/the-mountain-biker'
            element={<MountainBiker />}
          />

          <Route
            exact
            path='/tours/the-snow-adventurer'
            element={<SnowAdventurer />}
          />

          <Route exact path='/tours/the-park-camper' element={<ParkCamper />} />

          <Route
            exact
            path='/tours/the-city-wonderer'
            element={<CityWonderer />}
          />

          <Route exact path='/tours/the-star-gazer' element={<StarGazer />} />

          <Route exact path='/tours/the-wine-taster' element={<WineTaster />} />

          <Route
            exact
            path='/tours/the-northern-lights'
            element={<NorthernLights />}
          />

          <Route
            exact
            path='/tours/the-forest-hiker'
            element={<ForestHiker />}
          />

          <Route exact path='/login' element={<Login />} />

          <Route exact path='/signup' element={<Signup />} />

          <Route exact path='/terms' element={<Terms />} />

          <Route element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
