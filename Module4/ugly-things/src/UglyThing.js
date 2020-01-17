import React, {Component} from 'react'

class UglyThing extends Component {
        state = {
            isInEdit: false
        }
        
        render() {
        return (
            <div className="uglyThing">
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
                <img src={this.props.url} alt={this.props.desc}/>
            </div>
        )
    }
    
}

export default UglyThing