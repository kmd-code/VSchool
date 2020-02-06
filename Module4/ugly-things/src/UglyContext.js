import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

class UglyThingsProvider extends Component {
    state = {
        uglythings: []
    }

    submitItem = (newItem) => {
        this.setState(prevState => {
            return {
                uglythings: [newItem, ...prevState.uglythings]
            }
        })
    }

    editItem = () => {
        console.log("this was clicked")
    }

    render() {
        return (
            <Provider value={{items: this.state.uglythings, submitItem: this.submitItem, editItem: this.editItem}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyThingsProvider, Consumer as UglyThingsConsumer}