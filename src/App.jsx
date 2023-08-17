import { Fragment, useState } from 'react'
import  { Card } from './components/Card'
import { Form } from './components/form'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <Fragment>
      <h1>Parcial Front III</h1>
      <h2>Ignacio Gibbs</h2>
      <hr />
      <Form onAddUser={ addUser }/>
      <Card users={ users }/>
    </Fragment>
  )
}

export default App
