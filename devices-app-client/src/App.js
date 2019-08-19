import React, { Component } from 'react';

import DeviceCollection from './components/DeviceCollection'
import Database from './Db'
import './App.css';



class App extends Component {
  // todo: device list will come from ifixit api
  state = {
    devices: [
      {id: 1, name: 'iphone', include: true},
      {id: 2, name: 'laptop', include: true},
      {id: 3, name: 'camera', include: false}
    ]
  };

  database = new Database();

  render() {
    return (
        <div className="App">
          <DeviceCollection devices={this.state.devices} />
        </div>
    );
  }
}

export default App;
