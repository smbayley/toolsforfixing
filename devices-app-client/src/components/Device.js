import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Device extends Component {
    getStyle = () => {
        return {
            backgroundColor: "#f4f4f4",
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }

    render() {
        const { name } = this.props.device;
        return (
            <div style={this.getStyle()}>
                <p> { name } </p>
            </div>
        )
    }
}

Device.propTypes = {
    device: PropTypes.object.isRequired
}


export default Device;