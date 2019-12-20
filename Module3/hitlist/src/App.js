import React, {Component} from 'react';
import NamePlate from "./NamePlate"

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      hitList: []
    }
  }


  componentDidMount() {
    this.setState({isLoading: true})
    fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          hitList: data
        })
      })
  }

  render() {
    const namePlateComp = this.state.hitList.map(item => {
      return <NamePlate name={item.name} image={item.image} />
    })
    return (
      <div>
      <header>
        <h1>T h e H i t L i s t</h1>
      </header>
      <div className="hitContainer">
        {namePlateComp}
      </div>
      <footer>
        <img className="sniper" alt="sniper" src="https://static.thenounproject.com/png/59603-200.png" />
        <img className="bomb" alt="bomb" src="https://png2.cleanpng.com/sh/1aea57f7eb09e1e33f025a0a3716c2a4/L0KzQYi4UsE3N2M5UZGAYUO4SIG4U8c6PGI9UJC6OUi8QYeAUcE2OWQ5TacBM0W3SYeATwBvbz==/5a358013794188.1989167115134556354967.png" />
        <img className="axe" alt="axe" src="https://png2.cleanpng.com/sh/d9ba3af4c44c83350e7f3137ffc09c06/L0KzQYm3U8MyN6Z3fZH0aYP2gLBuTfF5bV5oh995dYTogn7wgB9ve15mkNc2NXHldoe7hMdlPpNrS6s3OES1SIm6WcIyPWM3TKs7NkO0SIiCVr5xdpg=/kisspng-axe-computer-icons-axe-5abf64d7d6bf39.8428839215224926318796.png" />
      </footer>
      </div>
    )
  }
}

export default App;
