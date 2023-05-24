import React from 'react';
import PropTypes from 'prop-types';

class BodySection extends React.Component {
    render() {
        const { title, children } = this.props;
    
        return (
            <div className="bodySection">
                <h2>{title}</h2>
                {children}
            </div>
        );
    };
}
   
BodySection.PropTypes = {
    title: PropTypes.string,
    children: PropTypes.node, 
};

export default BodySection;