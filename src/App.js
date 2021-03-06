import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';  //import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Use if not being hosted on GitHub Pages
import { Layout } from './components/Layout';
import { Footer } from './components/Footer';
import { NavigationBar } from './components/NavigationBar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NoMatch } from './pages/NoMatch';
import { Project } from './pages/Project';
import { Resume } from './pages/Resume';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Layout>
          <HashRouter basename='/'>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/project" component={Project} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </HashRouter>
        </Layout>
        <Footer />
      </React.Fragment>
    );
  }
}

