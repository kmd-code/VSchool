import React, {Component} from 'react';
import BadgeInfo from "./BadgeInfo"
import Badge from "./Badge"

class App extends Component {
  constructor(){
    super()
    this.state = {
      firstName: "John",
      lastName: "JingleHeimer",
      email: "jinglebells@live.com",
      birthPlace: "North Pole",
      phone: "801-123-4567",
      favFood: "Candycanes",
      about: "",
      edit: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ edit: false })
  }

  handleEdit(event) {
    event.preventDefault()
    this.setState({ edit: true })
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
  }

  render(){
    if (this.state.edit === true) {
    return (
      <BadgeInfo handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
    )
    } else {
      return (
        <Badge info={this.state} handleEdit={this.handleEdit}/>
      )
    }
  }
}

export default App;
