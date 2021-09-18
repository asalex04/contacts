import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import AddUserForm from "./components/AddUserForm";
import UserTable from "./components/UserTable";

const App = (props) => {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette', email: 'v1@mail.ru', phone: '+7 921 567894' },
    { id: 2, name: 'Max', username: 'maxfarseer', email: 'v2@mail.ru', phone: '+7 924 944547' },
  ]
  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([ ...users, user ])
  }

  const removeUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className='container'>
      <h1>Contacts</h1>
      <div className="flex-row">
        <div className="flex-large" style={{ paddingTop: '3rem'}}>
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large" style={{ paddingTop: '3rem'}}>
          <h2>View users</h2>
          <UserTable users={users} removeUser={removeUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
