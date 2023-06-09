import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css'; // import styling section


class BodySectionWithMarginBottom extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="bodySectionWithMargin">
                <BodySection {...props}/>           
            </div>
        );
    }
}   

BodySectionWithMarginBottom.PropTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]), 
};

BodySectionWithMarginBottom.defaultProps = {
    children: <React.Fragment />,
};

export default BodySectionWithMarginBottom;