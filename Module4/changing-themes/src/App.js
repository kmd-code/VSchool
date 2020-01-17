import React from 'react';
import Header from './Header'
import Footer from './Footer'
import {ThemeContextConsumer} from './themeContext'

function App() {
  return (
    <ThemeContextConsumer>
      {context => (
        <div>
        <Header theme={context.theme}/>
          <body>
            <h1 className={`${context.theme}-theme`}>This is the Super Cool Body</h1>
            <br />
            <button 
              className={`${context.theme}-theme`}
              onClick={context.toggleTheme}>
                {`${context.theme === "light" ? "Light" : "Dark"} Theme`}
              </button>
          </body>
        <Footer theme={context.theme} />
        </div>
      )}
    </ThemeContextConsumer>
  )
}

export default App;
