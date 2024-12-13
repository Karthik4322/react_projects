import React from 'react'

const MyNameComp = (props) => {
    return (
        <div>
            <h1>My Name is Panchashil</h1>
            <h1>My Name is :{props.name}</h1>
            <h1>I am :{props.post}</h1>
        </div>
    )
}

export default MyNameComp
