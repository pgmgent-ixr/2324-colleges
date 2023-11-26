import StudentListItem from './StudentListItem';

const StudentList = ({ data }) => {
  return (
    <>
      <ul>
        {!!data && data.map((student, index) => 
          <StudentListItem key={index} student={student} />
        )}
        {!data && <li>{`No students yet`}</li>}
      </ul>
    </>
  )
};

export default StudentList;