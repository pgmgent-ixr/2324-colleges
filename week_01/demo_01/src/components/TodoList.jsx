export default function TodoList ({ data }) {
  return (
    <ul>
      {!!data && data.map((item, index) => <li key={index}>{item}</li>)}
      {!data && <li>{`No todo's yet`}</li>}
    </ul>
  )
};