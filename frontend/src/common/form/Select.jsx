import React from 'react'

export default props => (
    <select {...props.input}
        className="form-control"
        readOnly={props.readOnly}
        type={props.type}>

        {props.children}
    </select>
)