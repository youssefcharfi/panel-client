import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Consumer} from '../Context'
import './contact.css' 
import 'font-awesome/css/font-awesome.min.css'

class Contact extends Component {
    state = {
        contactShowed: true 
    }
    showContact =() => {
        this.setState({
            contactShowed: !this.state.contactShowed
        })       
    }

    deleteContact = (id,dispatch) =>{
       let action={
            type: 'DELETE_CONTACT',
            payload: id
        }
        dispatch(action)
    }

    render() {
      const  {id,name,tel,mail} = this.props.data;

        return (
            <Consumer>
                {value => {
                  const {dispatch} = value;
                  return(
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{name} 
                 <i style={{cursor: "pointer"}} className="fa fa-sort-down" onClick={this.showContact}></i>
                 <i onClick={this.deleteContact.bind(this,id,dispatch)} style={{color: "red" , float: "right" , cursor: "pointer"}} className="fa fa-trash" aria-hidden="true"></i>
                    </h4>
                    {this.state.contactShowed ? 
                    <ul className="list-group">
                        <li className="list-group-item">phone : {tel}</li>
                        <li className="list-group-item">email : {mail}</li>
                    </ul> :
                   null
                    }
                </div>
            </div>
            )
     } }
            </Consumer>
            
           

        )
    }
}

Contact.defaultProps = {
    name: "my name",
    tel: "0600000000",
    mail: "myemail@gmail.com"
}

Contact.propTypes = {
    data: PropTypes.object.isRequired,
    
}

export default Contact;