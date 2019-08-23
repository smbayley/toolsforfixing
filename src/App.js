import React, { Component } from 'react';

import DeviceCollection from './components/DeviceCollection'
import DatabaseFactory from './stores/Db'
import Ifixit from './stores/Ifixit'
import './App.css';


class App extends Component {
  _ALPHANUMERIC = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  constructor(props) {
    super(props);
    this.state = {};
    this.storage = window.localStorage;
    this.database = DatabaseFactory.getInstance();
    this.sessionId = this._get_session();
    this.ifixt = new Ifixit();
  }

  render() {
    
    return (
        <div className="App">
          
        </div>
    );
  }

  _clear_session() {
    document.cookie = 'if_sid=; expires=' + new Date().toUTCString() + ';';
  }

  _get_session(force_new=false) {
    if (force_new) {
      this._clear_session();
    }

    let sid = ''
    const n_chars = 12;
    const match = document.cookie.match(/if_sid=(?<sid>[a-zA-Z0-9]*);?/);
    debugger;
    if (match != null) 
    {
      sid = match.groups['sid'];
      console.log('retrieved sessionId: ' + sid);
    }
    else
    {
      let i = 0;
      while (i++ < n_chars)
      {
        sid += this._ALPHANUMERIC.charAt(Math.floor(Math.random() * this._ALPHANUMERIC.length));
      }
      document.cookie = 'if_sid=' + sid;
      console.log('generated sessionId: ' + sid);
    }

    return sid;
  }

}

export default App;
