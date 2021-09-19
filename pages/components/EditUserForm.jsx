import {useEffect, useState} from 'react'
import {Button, Col, Form, Row} from "react-bootstrap";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  const handleChange = (e) => {
    const { name, value } = e.target

    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.editUser(user.id, user)
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
        Edit user
      </Button>{' '}
      <Button
        onClick={() => props.setEditing(false)}
        variant="primary"
      >
        Cancel
      </Button>
    </Form>
  )
}

export default EditUserForm
