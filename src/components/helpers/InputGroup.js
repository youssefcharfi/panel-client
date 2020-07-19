import React from 'react'
import classnames from 'classnames'
export default function InputGroup(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input
                className={classnames("form-control" , {
                    'is-invalid': props.error
                })}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                name={props.name}

            />
            <div className="invalid-feedback">{props.error}</div>
        </div>
    )
}
