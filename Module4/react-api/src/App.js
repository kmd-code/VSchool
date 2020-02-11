import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import axios from 'axios'

import Home from './components/Home'
import Favorites from './components/Favorites'
import PokeDetail from './components/PokeDetail'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [pokeData, setPokeData] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon', {params: {
      limit: 500,
      offset: 0
    }})
      .then(resp => {
        setPokeData(() => resp.data.results)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home data={pokeData} />
        </Route>
        <Route exact path='/favorites'>
          <Favorites />
        </Route>
        <Route path ='/pokemon/:pokeId'>
          <PokeDetail />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
