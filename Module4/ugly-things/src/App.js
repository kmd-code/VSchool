import React, {Component} from 'react';
import UglyForm from './UglyForm'
import UglyThing from './UglyThing'
import {UglyThingsConsumer} from './UglyContext'

class App extends Component {
  render() {
    return (
      <div>
        <UglyThingsConsumer>
          {context => {
            const UglyStuff = context.items.map((thing, index, array) => 
              <UglyThing 
                key={array.length - index} 
                title={thing.title} 
                url={thing.url} 
                desc={thing.desc}
              />)
            console.log(UglyStuff)
          return (
            <div>
              <UglyForm submitItem={context.submitItem}/>
              <div className="uglyContainer">
                {UglyStuff}
              </div>
            </div>
          )}}
        </UglyThingsConsumer>
      </div>
    )
  }
}

export default App;
