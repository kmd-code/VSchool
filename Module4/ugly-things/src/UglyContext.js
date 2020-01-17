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

    editThing = (editItem) => {
        this.setState({
            title: editItem.title,
            url: editItem.url,
            desc: editItem.desc
        })
    }

    render() {
        return (
            <Provider value={{items: this.state.uglythings, submitItem: this.submitItem}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UglyThingsProvider, Consumer as UglyThingsConsumer}