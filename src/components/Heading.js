import React from 'react';
import PropTypes from 'prop-types';



const Heading = ({ heading }) => {
    return (
        <div className='col'>
            <h1>{heading}</h1>
        </div>
    )
}


Heading.defaultProps = {
    heading: 'Movies Title',
}


Heading.propTypes = {
    heading: PropTypes.string
}


export default Heading;
