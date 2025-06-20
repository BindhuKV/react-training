import { useParams } from 'react-router-dom'

const User = () => {
  const { id } = useParams()
  const users = {
    1: { name: 'bindhu', email: 'bindhu@gmail.com' },
    2: { name: 'shree', email: 'shree@gmail.com' }
  }

  return (
    <div>
      <h1>User {id}</h1>
      {users[id] ? (
        <div>
          <p>Name: {users[id].name}</p>
          <p>Email: {users[id].email}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  )
}

export default User