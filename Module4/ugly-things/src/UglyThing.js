import React, {Component} from 'react'

class UglyThing extends Component {
        state = {
            isInEdit: false,
            title: this.props.title,
            desc: this.props.desc,
            url: this.props.url
        }

        editThing = () => {
                this.setState(prevState => {
                    return {
                        isInEdit: !prevState.isInEdit,
                        title: this.state.title,
                        desc: this.state.desc,
                        url: this.state.url
                    }
                })
                console.log(this.state)
        }

        handleChange = (event) => {
            const {name, value} = event.target
            this.setState({[name]: value})
        }
        
        render() {
             if(this.state.isInEdit) {
                return (
                    <div className="uglyThing">
                        <label>Title:</label>
                        <input placeholder={this.props.title} onChange={this.handleChange} type="text" name="title" value={this.state.title}></input>
                        <br />
                        <label>Description:</label>
                        <input placeholder={this.state.desc} onChange={this.handleChange} type="text" name="desc" value={this.state.desc}></input>
                        <br />
                        <label>Image URL:</label>
                        <input placeholder={this.state.url} onChange={this.handleChange} type="text" name="url" value={this.state.url}></input>
                        <br />
                        <button onClick={this.editThing}>Change</button>
                    </div>
                    )
             } else {
                return (
                    <div onDoubleClick={this.editThing} className="uglyThing">
                        <h2>{this.state.title}</h2>
                        <p>{this.state.desc}</p>
                        <img src={this.state.url} alt={this.state.desc}/>
                    </div>
                )
             }
        
    }
    
}

export default UglyThing