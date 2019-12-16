import React from 'react'

function List(props) {
    const nameComp = props.names.map(name => <li>{name}</li>)

    return (
        <ul>
            {nameComp}
        </ul>
    )
}

export default List