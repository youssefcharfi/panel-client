import React, { Component } from 'react'

 const Context = React.createContext();

const reducer = (state , action) =>{
    switch(action.type){
        case 'DELETE_CONTACT':
             return{
          contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return{
          contacts: [...state.contacts , action.payload]  
            };
        default : 
        return state;
    }
}

export class Provider extends Component {

    state={
        contacts:[
            {id: 1 , name: "Youssef charfi" , tel: "0700487161" , mail: "youssefcharfipro@gmail.com"},
            {id: 2 , name: "Abha charfi" , tel: "0700487162" , mail: "abhacharfipro@gmail.com"},
            {id: 3 , name: "Abdelghani charfi" , tel: "0700487163" , mail: "abdelghanicharfipro@gmail.com"}
        ],
        dispatch: action => this.setState(state => reducer(state , action))
    }

    render(){
        return (
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer ;