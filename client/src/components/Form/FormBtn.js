import React from 'react';
import PropTypes from 'prop-types';

class FormBtn extends React.Component {

    render () {

        const { children, disabled, onClick } = this.props

        return (
            <button onClick={onClick} disabled={disabled} className='btn btn-info'>
            {children}
            </button>
        );
    }
}

FormBtn.props = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}

export default FormBtn