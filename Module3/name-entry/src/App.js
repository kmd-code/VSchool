import React, {Component} from 'react';
import List from './List'

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      names: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({ firstName: event.target.value })
  }

  handleSubmit(event){
    event.preventDefault();
    // let names = this.state.names;
    // names.push(this.state.firstName)
    // this.setState({
    //   names
    // });
    this.setState(prevState => ({
      names: [...prevState.names, prevState.firstName]
    }))
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} placeholder="Enter Name Here" />
          </label>
            <input type="submit" value="Submit" />
        </form>
        <List names={this.state.names}/>
      </div>
    )
  }
}

export default App;
