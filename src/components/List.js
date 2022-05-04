import React from 'react';
 

const List = props => (
  <table className="table" >
    <thead>
      <tr >
        <th >Title</th>
        <th>Command</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button
                className="btn btn-warning "
                onClick={() => {
                  props.editRow(user)
                }}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td  >No testCase</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default List