import React from 'react';

import Header from './components/navbar/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/projects/Projects'
import Blog from './components/Blog'
import ProjectDetail from './components/projects/ProjectDetail'
import Contact from './components/Contact'


import {Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route path='/projects/:projectId'>
          <ProjectDetail />
        </Route>
        <Route path='/blog'> 
          <Blog />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>

      <Footer />
    </div>
  )
}

export default App;
