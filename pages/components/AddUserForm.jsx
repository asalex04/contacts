import {Form, Col, Row, Button} from 'react-bootstrap'
import {useState} from "react";

const AddUserForm = props => {
  const initialState = {
    id: null,
    name: '',
    username: '',
    email: '',
    phone: '',
  }
  const [user, setUser] = useState(initialState)

  const handleChange = (e) => {
    const {name, value} = e.currentTarget
    setUser({...user, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addUser(user)
    setUser(initialState)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        {['name', 'username', 'email', 'phone'].map((type) => (
          <Col key={type}>
            <Form.Control
              placeholder={type}
              type='text'
              name={type}
              value={user.type}
              onChange={handleChange}
            />
          </Col>
        ))}
      </Row>
      <Button variant="primary" type="submit">
        Add new user
      </Button>
    </Form>
  )
}

export default AddUserForm
