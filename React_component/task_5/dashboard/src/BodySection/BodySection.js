import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BodySection.css';

class BodySection extends React.Component {
    constructor(props) {
        super(props);
    }
 render() {
    const { children, title } = this.props;

    return (
        <div className="bodySection">
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    );
}
}   

BodySection.PropTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]), 
};

BodySection.defaultProps = {
    children: <React.Fragment />,
};

export default BodySection;