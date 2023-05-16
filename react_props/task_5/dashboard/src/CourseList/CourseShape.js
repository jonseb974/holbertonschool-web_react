import PropTypes from 'prop-Types';


const CourseShape = propTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credits: PropTypes.number.isRequired,
})

export default CourseShape;