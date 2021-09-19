import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'
import _ from 'lodash'
import AddUserForm from "./components/AddUserForm";
import UserTable from "./components/UserTable";
import EditUserForm from "./components/EditUserForm";
import {useHttp} from "./hooks/http.hook";

const baseUrl = 'http://localhost:4200/usersData/'

const App = (props) => {
  const [alert, setAlert] = useState(false);
  const {request, loading} = useHttp()
  const [users, setUsers] = useState([])
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    async function load() {
      const res = await request(baseUrl)
      setUsers(res)
      setAlert(false)
    }
    load()
  }, [alert])

  const addUser = (user) => {
    user.id = _.uniqueId()
    // setUsers([...users, user]) // use of local base
    request(baseUrl, 'POST', user)
    setAlert(true);
  }

  const removeUser = (id) => {
    // setUsers(users.filter(user => user.id !== id)) // use of local base
    request(`${baseUrl}${id}`, 'DELETE')
    setAlert(true);
  }

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone
    })
  }
  const editUser = (id, editUser) => {
    setEditing(false)
    // setUsers(users.map(user => (user.id === id ? editUser : user))) // use of local base
    request(`${baseUrl}${id}`, 'PUT', editUser)
    setAlert(true);
  }

  return (
    <div className='container'>
      <h1>Contacts</h1>
      <div className="flex-row">
        <div className="flex-large" style={{paddingTop: '3rem'}}>
          {!editing
            ? (<div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser}/>
              </div>
            ) : (
              <EditUserForm
                editUser={editUser}
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
              />
            )}
        </div>
        <div className="flex-large" style={{paddingTop: '3rem'}}>
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} removeUser={removeUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
