import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Photos from './Photos';
import Posts from './Posts';
import Home from './Home';
import Contacts from './Contacts'
import {contacts} from './Contacts';
import '../index.css'
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="menu-main">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
            <li><NavLink to="/photos">Photos</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/photos" component={Photos}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/contacts" component={Contacts}/>
            {contacts.map((contact)=>{
              return (
                <Route path={`/contact/${contact.username}`} component={Contacts}/>
              )
    
            
            })}
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;