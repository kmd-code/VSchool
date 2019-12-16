import React, {Component} from "react"

class BadgeInfo extends Component {


    render() {
        return (
            <div className="flexCont">
            <form className="badge" onSubmit={this.props.handleSubmit}>
                <input 
                    placeholder="First Name" 
                    className="firstName" 
                    type="text" 
                    name="firstName"
                    onChange={this.props.handleChange}
                    />
                <input 
                    placeholder="Last Name" 
                    className="lastName" 
                    type="text" 
                    name="lastName"
                    onChange={this.props.handleChange}
                    />
                <br />
                <input 
                    placeholder="Email" 
                    className="email" 
                    type="email" 
                    name="email"
                    onChange={this.props.handleChange}
                    />
                <input 
                    placeholder="Place of Birth" 
                    className="birthPlace" 
                    type="text" 
                    name="birthPlace"
                    onChange={this.props.handleChange}
                    />
                <br />
                <input 
                    placeholder="Phone Number" 
                    className="phone" 
                    type="phone" 
                    name="phone"
                    onChange={this.props.handleChange}
                    />
                <input 
                    placeholder="Favorite Food" 
                    className="favFood" 
                    type="text" 
                    name="favFood"
                    onChange={this.props.handleChange}
                    />
                <br />
                <textarea 
                    placeholder="Tell us about You" 
                    className="about" 
                    type="text" 
                    name="about"
                    onChange={this.props.handleChange}
                    />
                <br />
                <input className="button" type="submit"></input>
            </form>
            </div>
        )
    }
}

export default BadgeInfo