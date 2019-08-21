import React, { Component } from 'react';

import DeviceCollection from './components/DeviceCollection'
import DatabaseFactory from './Db'
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loginPage: [],
        mainPage: []
      };

    this.storage = window.localStorage;
    this.database = DatabaseFactory.getInstance();
    this.sessionId = this._get_session();
    this._setup_db(false);
  }

  _get_session = () => {
    var n_chars = 6;
    var match = document.cookie.match(/if_sid=(.*);?/);
    var sid = ''

    if (match != null) 
    {
      if (match instanceof Array)
        sid = match[0].substring(n_chars + 1)
      else
        sid = match.substring(n_chars + 1)

      console.log('retrieved sessionId: ' + sid);
    }
    else
    {
      sid = Math.random().toString(36).substring(n_chars + 1);
      document.cookie = 'if_sid=' + sid;

      console.log('generated sessionId: ' + sid);
    }

    return sid;
  }

  _setup_db = (force_fetch=false) => {
    var need_fetch = true;
    var today = new Date();

    if (!force_fetch)
    {
      // we'll do a fetch only if it hasn't been done in the last 48 hours
      var fetch_key = this.sessionId + '_fetch';
      var last_fetch = this.storage.getItem(fetch_key);
      if (last_fetch != null)
      {
          last_fetch = Date.parse(last_fetch);
          var elapsed = (today.getTime() - last_fetch) / 1000;
          var elapsed_days = elapsed / (60 * 60 * 24)

          if (elapsed_days <= 2)
            need_fetch = false;
      }
    }

    if (need_fetch)
    {
      this.database.fetch();
      this.storage.setItem(this.sessionId + '_fetch', today.toString());
    }
  }

  render() {
    return (
        <div className="App">
          
        </div>
    );
  }


}

export default App;
