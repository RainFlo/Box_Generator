import React, { useState } from 'react'

const Box = (props) => {

    const [state, setState] = useState({
        boxes: []
    })

    const addBox = (box) => {
        setState({
            boxes: state.boxes.push(box)
        })
    }
    
    return (
        <div>
            <p>placeholder to see if it works</p>
            <pre>placeholder to see if it works</pre>
            <pre>{ props.color }</pre>
        </div>
    )
}

export default Box
