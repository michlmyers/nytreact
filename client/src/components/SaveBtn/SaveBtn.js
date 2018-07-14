import React from 'react';
import PropTypes from 'prop-types';

class SaveBtn extends React.Component {

    render () {
        return (
            <button className='btn btn-warning' onClick={this.props.onClick}>
            Save this article
            </button>
        );
    }
}

SaveBtn.props = {
    onClick: PropTypes.func
}

export default SaveBtn;