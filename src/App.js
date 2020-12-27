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


import { HashRouter as Router, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  componentDidMount() {
    new WOW().init();
  }

  render() {
    document.title = 'Natours | All Tours';

    return (
      <Router >
        <ScrollToTop>
          <Navbar />
          <Switch >
            <Route exact path="/" component={HomePage} />

            <Route exact path="/tours" component={Tours} />

            <Route exact path="/tours/the-sea-explorer" component={SeaExplorer} />

            <Route exact path="/tours/the-mountain-biker" component={MountainBiker} />

            <Route exact path="/tours/the-snow-adventurer" component={SnowAdventurer} />

            <Route exact path="/tours/the-park-camper" component={ParkCamper} />

            <Route exact path="/tours/the-city-wonderer" component={CityWonderer} />

            <Route exact path="/tours/the-star-gazer" component={StarGazer} />

            <Route exact path="/tours/the-wine-taster" component={WineTaster} />

            <Route exact path="/tours/the-northern-lights" component={NorthernLights} />

            <Route exact path="/tours/the-forest-hiker" component={ForestHiker} />

            <Route exact path="/login" component={Login} />

            <Route exact path="/signup" component={Signup} />

            <Route exact path="/terms" component={Terms} />

            <Route component={NotFound} />

          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
