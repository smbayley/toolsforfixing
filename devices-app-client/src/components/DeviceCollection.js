import React, { Component } from 'react';
import Device from './Device';
import PropTypes from 'prop-types';

class DeviceCollection extends Component {
    render() {
        return this.props.devices.map((device) => (
            <Device key={device.id} device={device}/>
        ));
    }
}

DeviceCollection.propTypes = {
    devices: PropTypes.array.isRequired
}

export default DeviceCollection;