import React, { Component } from 'react';
import PropTypes from 'prop-types';


class BodySection extends React.Component {
 render() {
    const { title } = this.props;

    return (
        <div className="bodySection">
            <h2>test</h2>
            <p>test</p>
        </div>
    );
}
}   

BodySection.PropTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]), 
};

BodySection.defaultProps = {
    children: <React.Fragment />,
};

export default BodySection;