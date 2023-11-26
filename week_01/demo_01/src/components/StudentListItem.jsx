const StudentListItem = ({ student }) => {
  return (
    <>
      {!!student &&
        <li>
          <h3>{student.firstName} {student.lastName}</h3>
          <img src={student.avatarURL} alt={`This is a picture of ${student.firstName} ${student.lastName}`} />
        </li>
      }
      {!student && <li>{`No student`}</li>}
    </>
  )
};

export default StudentListItem;