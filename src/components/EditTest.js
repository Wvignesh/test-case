import React, { useState } from 'react'

const EditTest = props => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateUser(user.id, user)
      }}
    >
       <fieldset>
        <label className='form-label'>Test-Title:</label> <br></br>
        <input
          type="text"
          className='form-control'
          name="name"
          value={user.name}
          onChange={handleInputChange}
        /> <br></br> <br></br>
        <label className='form-label'>commamd:</label> <br></br>
        <textarea
          type="text"
          className='form-control'
          name="username"
          value={user.username}
          onChange={handleInputChange}
        /> <br></br> <br></br>
        <button className='btn btn-outline-dark'>Update List</button>
        <button
          className="btn  btn-outline-dark muted-button"
          onClick={() => props.setEditing(false)}
        >
          Cancel
        </button>
      </fieldset>
    </form>
  )
}

export default EditTest