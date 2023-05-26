import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection';


const styles = StyleSheet.create({
    bodySectionWithMargin: {
      marginBottom: '40px',
    },
});

class BodySectionWithMarginBottom extends React.Component {
    render() {
        return (
            <div className={css(styles.bodySectionWithMargin)}>
                <BodySection {...this.props} />
            </div>
        );
    };
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default BodySectionWithMarginBottom;