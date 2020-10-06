// == Import npm
import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';

// == Import
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Profil from '../Profil';
import Library from '../../containers/Card';
import Fiction from '../../containers/Fiction';
import './style.scss';
import Contact from '../Contact';
import ContactForm from '../Contact/ContactForm';
import TeamPage from '../TeamPage';

const cookies = new Cookies();

// Identifiants : Bobby.night@gmail.com
// Pswd : bobby

// == Composant
const App = ({ checkAuth }) => {
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="scrollzone">
        <Switch>

          {/* Route vers l'accueil */}
          <Route exact path="/">
            <Home />
            <Footer />
          </Route>

          {/* Route vers la bibliothèque */}
          <Route exact path="/library">
            <Library />
            <Footer />
          </Route>

          <Route exact path="/profil">
            <Profil />
            <Footer />
          </Route>

          <Route exact path="/fiction">
            <Fiction />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/ContactForm">
            <ContactForm />
          </Route>

          <Route exact path="/TeamPage">
            <TeamPage />
          </Route>

        </Switch>
      </div>
    </div>
  );
};

// == Export
export default App;
