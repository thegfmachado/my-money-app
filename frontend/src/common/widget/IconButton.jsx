import React from 'react'

export default props => (
    <button type="button" className={`btn btn-${props.btnClass}`} onClick={props.onClick}>
        <i className={`fa fa-${props.icon}`}></i>
    </button>
)