import React, {useContext, useState} from 'react'
import {Context} from './quoteContext'

function App() {
  const {quotesData, submitHandler, setFavQuotes} = useContext(Context)
  const [randomQuote, setRandomQuote] = useState(newQuote)
  

  const onClick = (e) => {
    e.preventDefault()
    console.log(quotesData)
    console.log(randomQuote)
  }

  const saveFav = (quote) => {
    // setFavQuotes((prev) => ({...prev, quote}))
  }

  return (
    <div>
      <button onClick={onClick}>Click Me</button>
      <button onClick={submitHandler}>Submit Handler Button</button>
      <button onClick={}>Save Quote to Fav Arr</button>
    </div>
  )
}

export default App
