import React, { useState } from 'react'

const AddTest = props => {
  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
     
  }
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.username) return
        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <fieldset>
        <label className="form-label" >Test-Title:</label> <br></br>
        <input
          type="text"
          name="name"
          className="form-control"
          value={user.name}
          onChange={handleInputChange}
        /> <br></br> <br></br>
        <label className="form-label">command:</label> <br></br>
        <textarea
        className="form-control"
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        /> <br></br> <br></br>
        <button className='btn btn-primary'>Add List</button>
      </fieldset>
    </form>
  )
}

export default AddTest