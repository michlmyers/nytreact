import React from 'react';
import PropTypes from 'prop-types';

class SaveBtn extends React.Component {

    render () {
        return (
            <span className='save-btn' onClick={this.props.onClick}>
            Save this article
            </span>
        );
    }
}

SaveBtn.props = {
    onClick: PropTypes.func
}

export default SaveBtn;