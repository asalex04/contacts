import {Table, Button} from 'react-bootstrap'

const UserTable = props => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>email</th>
        <th>phone</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <Button>Edit</Button>{' '}
              <Button
                variant="danger"
                onClick={() => props.removeUser(user.id)}
              >
                Delete</Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5}>No users</td>
        </tr>
      )}
      </tbody>
    </Table>
  )
}

export default UserTable
