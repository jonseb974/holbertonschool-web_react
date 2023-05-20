import React from 'react'
//import './CourseList.css'
import PropTypes from 'prop-types'


const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
    // props:
    // - isHeader: bool, default: false
    // - textFirstCell: string, required
    // - textSecondCell: string, default: null
    if (isHeader) {
        if (textSecondCell === null) {
            return (
            <tr>
                <th colSpan="2">{textFirstCell}</th>
            </tr>
            );
        } else {
            return (
            <tr>
                <th>{textFirstCell}</th><th>{textSecondCell}</th>
            </tr>
            );
        }
    } else {
        return (
        <tr>
            <td>{textFirstCell}</td><td>{textSecondCell}</td>
        </tr>
        );
    }
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

export default CourseListRow;