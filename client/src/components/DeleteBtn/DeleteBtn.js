import React from 'react';
import PropTypes from 'prop-types';

class DeleteBtn extends React.Component {

    render () {
        return (
            <button className='btn btn-danger' onClick={this.props.onClick}>
            Delete this article
            </button>
        );
    }
}

DeleteBtn.props = {
    onClick: PropTypes.func
}

export default DeleteBtn;