import React from 'react'
import PropTypes from 'prop-types';

const ErrorStub = ({error}) => (
    <p>Network Error: {error}</p>
);

ErrorStub.propTypes = {
    error: PropTypes.string.isRequired,
}

export { ErrorStub };