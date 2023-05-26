import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    headerRow: {
        backgroundColor: '#deb5b545',
    },
    defaultRow: {
        backgroundColor: '#f5f5f5ab',
    },
    th: {
        borderTop: '1px solid lightgrey',
        borderBottom: '1px solid lightgrey',
        padding: '.5rem',
        textAlign: 'left',
    },
    centeredTh: {
        textAlign: 'center',
    },
    td: {
        padding: '.2rem .5rem',
        textAlign: 'left',
    },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    let rowStyle = isHeader ? styles.headerRow : styles.defaultRow;
    let tr;
    
    if (isHeader && textSecondCell === null) {
        tr = <th className={css(styles.th, styles.centeredTh)} colSpan={2}>{textFirstCell}</th>;
    } else if (isHeader && textSecondCell) {
        tr = (
        <>
        <th className={css(styles.th)}>{textFirstCell}</th>
        <th className={css(styles.th)}>{textSecondCell}</th>
        </>
        );
    } else {
        tr = (
        <>
        <td className={css(styles.td)}>{textFirstCell}</td>
        <td className={css(styles.td)}>{textSecondCell}</td>
        </>
        );
    }
    return <tr className={css(rowStyle)}>{tr}</tr>;
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

export default CourseListRow;