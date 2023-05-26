import React from 'react';
import PropTypes from 'prop-types';
import './CourseList.css'

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    let tr;

    const rowStyle = {
        backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
    };

    if (isHeader && textSecondCell === null) {
        tr = <th colSpan={2}>{textFirstCell}</th>;
    } else if (isHeader && textSecondCell) {
        tr = (
        <React.Fragment>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
        </React.Fragment>
        );
    } else {
        tr = (
        <React.Fragment>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
        </React.Fragment>
        );
    }
    
    return <tr style={rowStyle}>{tr}</tr>;
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
