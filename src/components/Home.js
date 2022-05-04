import React, { useState } from 'react'; 
import AddTest from './AddTest';
import EditTest from './EditTest';
import List from './List';
function Home() {
    const testData = [
        { 
          id: 1, title: 'test', 
        discription: 'test command' 
      }
        
      ]
    
      const [test, setTest] = useState(testData)
      const [editing, setEditing] = useState(false)
    
      const addUser = user => {
        user.id = test.length + 1
        setTest([...test, user])
      }
    
      const initialFormState = { id: null, title: '', discription: '' }
      const [currentUser, setCurrentUser] = useState(initialFormState)
    
      const editRow = user => {
        setEditing(true)
        setCurrentUser({ id: user.id, title: user.title, discription: user.discription })
      }
    
      const updateUser = (id, updatedUser) => {
        setEditing(false)
        setTest(test.map(user => (user.id === id ? updatedUser : user)))
      }
    
      const deleteUser = id => {
        setTest(test.filter(user => user.id !== id))
        // console.log(id)
      }
  return (
    < >
      
      <div className="container-fluid">
     
    
       
      <div className="grid-users">
        <div className="add-users">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditTest
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add TestCase</h2>
              <AddTest addUser={addUser} dats={testData} />
            </div>
          )}
        </div>
        <div className="list-users">
          <h2>List Tests</h2>
          <List users={test} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>

    </>
  )
}

export default Home
