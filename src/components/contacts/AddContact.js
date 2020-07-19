import React, { Component } from 'react'
import { Consumer } from '../Context'
import InputGroup from '../helpers/InputGroup'

class AddContact extends Component {

    state = {
        name: '',
        tel: '',
        mail: '',
        errors: {
            name: '',
            tel: '',
            mail: '',
        }
    }

    submit = (dispatch, length, e) => {
        e.preventDefault();
        const {name , tel , mail} = this.state
        
        if(name === ""){
            this.setState({errors: {name: "The name is required ! "}})
            return;
        }
   
        if(mail === ""){
            this.setState({errors: {mail: "The email is required ! "}})
            return;
        }
        
        if(tel === ""){
            this.setState({errors: {tel: "The phone is required ! "}})
            return;
        }

     let action = {
            type: 'ADD_CONTACT',
            payload: {
                id: length + 1,
                name: name,
                tel: tel,
                mail: mail
            }
        }
        
        dispatch(action)
        
        this.setState({
            name: '',
            tel: '',
            mail: '' ,
            errors: {
                name: '',
                tel: '',
                mail: '',
            }
        })
    }
    
    getData = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        const {name, tel, mail, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    const { length } = value.contacts
                    return (
                        <div className="card">
                            <form onSubmit={this.submit.bind(this, dispatch, length)}>
                                <div className="card-body">
                                    <h4 className="card-title">Add Contact Here</h4>
                                    <div className="card-text">
                                        <InputGroup
                                            label="Name"
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={this.getData}
                                            error={errors.name}
                                        />
                                        <InputGroup
                                            label="Email"
                                            type="email"
                                            name="mail"
                                            value={mail}
                                            onChange={this.getData}
                                            error={errors.mail}
                                        />
                                        <InputGroup
                                            label="Phone"
                                            type="text"
                                            name="tel"
                                            value={tel}
                                            onChange={this.getData}
                                            error={errors.tel}
                                        />
                                    </div>
                                </div>
                                <button className="btn btn-success btn-block">Add Contact</button>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;