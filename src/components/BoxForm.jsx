import React, { useState } from 'react'

const BoxForm = (props) => {

    const [state, setState] = useState({
        boxes: []
    })

    const addBox = (box) => {
        setState({
            boxes: state.boxes.push(box)
        })
    }

    const [color, setColor] = useState("");

    const handleColor = (e) => {
        e.preventDefault();
        addBox(e)
        props.onNewColor( color );
    }

    const boex = ["red", "blue", "green"];

    return (
        <>
            <form onSubmit={ handleColor }>
                <label>Color </label>
                <input type="text" onChange={ (e) => setColor(e.target.value) }/>
                <input type="submit" value="Add"/>
            </form>
            <div>
                <ul>
                    boex.map( (box, idx) =>
                        <li key={ idx }>{ box }</li>
                    )
                </ul>
            </div>
        </>
    )
}

export default BoxForm
