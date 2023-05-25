import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    courseList: {
      width: '100%',
      border: '1px solid lightgrey',
      borderCollapse: 'collapse',
      marginTop: '2rem',
    },
    tableHeading: {
      borderTop: '1px solid lightgrey',
      borderBottom: '1px solid lightgrey',
      padding: '.5rem',
      textAlign: 'left',
    },
    centeredHeading: {
      textAlign: 'center',
    },
    tableData: {
      padding: '.2rem .5rem',
      textAlign: 'left',
    },
  });

const CourseList = ({listCourses}) => {
    return (
        <table id={css(styles.courseList)}>
            <thead>
                <CourseListRow
                    isHeader={true}
                    textFirstCell={"Available courses"} 
                    styles={styles.tableHeading}
                />
                <CourseListRow
                    isHeader={true}
                    textFirstCell={"Course name"}
                    textSecondCell={"Credit"}
                    styles={[styles.tableHeading, styles.tableHeading]}
                />
            </thead>
            <tbody>
                {listCourses.length === 0 && (
                    <CourseListRow
                        textFirstCell={"No course available yet"} 
                        styles={styles.tableData}
                    />
                )}
                {listCourses.map((course) => (
                    <CourseListRow
                        key={course.id}
                        textFirstCell={course.name}
                        textSecondCell={course.credit}
                        styles={styles.tableData}
                    />
                ))}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    })).isRequired,
  };
  
  const CourseListRow = ({ isHeader, textFirstCell, textSecondCell, styles }) => {
    const TableCell = isHeader ? 'th' : 'td';
    return (
      <tr>
        <TableCell className={css(styles)} colSpan={textSecondCell ? '2' : '1'}>
          {textFirstCell}
        </TableCell>
        {textSecondCell && <TableCell className={css(styles)}>{textSecondCell}</TableCell>}
      </tr>
    );
  };
  
CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
}

export default CourseList;
