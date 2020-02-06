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
                    <input placeholder="Please Enter a Title" onChange={this.handleChange} type="text" name="title" value={this.state.title} />
                    <input placeholder="Please Enter Image URL" onChange={this.handleChange} type="text" name="url" value={this.state.url}/>
                    <input placeholder="Please Enter a short Description" onChange={this.handleChange} type="text" name="desc" value={this.state.desc}/>
                    <br/>
                    <button onClick={(event) => {
                        event.preventDefault()
                        this.props.submitItem(this.state)}}>
                        Submit
                    </button>
                    <p>Double click to edit your ugly thing.</p>
                </form>
            </div>
        )
    }
}

export default UglyForm