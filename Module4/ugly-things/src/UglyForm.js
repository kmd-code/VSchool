import React, {Component} from 'react'

class UglyForm extends Component {
    state = {
        title: "",
        url: "",
        desc: ""
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render () {
        return (
            <div className="uglyForm">
                <form>
                    <input onChange={this.handleChange} type="text" name="title" value={this.state.title} />
                    <input onChange={this.handleChange} type="text" name="url" value={this.state.url}/>
                    <input onChange={this.handleChange} type="text" name="desc" value={this.state.desc}/>
                    <button onClick={(event) => {
                        event.preventDefault()
                        this.props.submitItem(this.state)}}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default UglyForm