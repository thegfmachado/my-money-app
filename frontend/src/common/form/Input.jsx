import React from 'react'

export default props => (
    <input {...props.input}
        className="form-control"
        readOnly={props.readOnly}
        type={props.type} />
)