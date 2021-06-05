import React from "react"
import {useState, useEffect} from "react"
import axios from 'axios'
const Context = React.createContext()


function ContextProvider (props) {
    const [quotesData, setQuotesData] = useState()
    const [favQuotes, setFavQuotes] = useState()


    useEffect( () => {
        axios.get("https://type.fit/api/quotes")
        .then(res => {
            setQuotesData(res.data)
        })
        .catch(err => console.log(err))
    }, [])


    // how to make this block of code DRYer?
    const submitHandler = (e) => {
        const randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)]
        return randomQuote
    }

    const saveFav = (quote) => {
        setFavQuotes((prev) => ({...prev, quote}))
    }


    // need a button that renders with the quote and allows the user to save the quote to a favorites list
    // const favoritesSubmitHandler = (e) => {
    //     e.preventDefault()
    //     return(
    //         setFavQuote(prev => ({
    //             ...prev,
    //             favQuote: [...prev, favQuote]
    //         }))
    //     )
    // }

    return(
        <Context.Provider value ={{quotesData, newQuote, submitHandler, setFavQuotes}}>
            {props.children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}