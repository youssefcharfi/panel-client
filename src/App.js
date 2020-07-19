import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './components/Context';
import AddContact from './components/contacts/AddContact';
import Contacts from './components/contacts/Contacts';
class App extends Component {
  render(){
  return (
    <Provider>
      <div>
      <Navbar title="Contacts List :" />
      <AddContact />
      <Contacts />
    </div>
    </Provider>
    
      
    );
}
}
export default App;
