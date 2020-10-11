import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

const TodoOutput = () => {
  const db = firebase.firestore()
  const [allTodos, setAllTodos] = useState([])
  const [selectedSort, setSelectedSort] = useState('Not Completed')

  useEffect(() => {
    const unsubscribe = db.collection('todoList').orderBy('enteredTodo', 'asc').onSnapshot((snapshot) => {
      const newTodos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setAllTodos(newTodos)
    })
    return () => unsubscribe()
  }, [db])

  function handleDelete(todo) {
    db.collection('todoList').doc(todo.id).delete()
  }

  function handleToggle(todo) {
    db.collection("todoList").doc(todo.id).update({
      complete: !todo.complete
    })
  }

  const sortedComplete = allTodos.filter(function (item) {
    if (item.complete === true) {
      return item
    } return null
  })

  const sortedNotComplete = allTodos.filter(function (item) {
    if (item.complete === false) {
      return item
    } return null
  })

  return (
    <div className='outputDiv'>
      <div>
        <label>Sort Todo's by:</label>
        <select value={selectedSort} onChange={e => setSelectedSort(e.target.value)} className='select-css'>
          <option>Completed</option>
          <option>Not Completed</option>
        </select>
      </div>
      <ul>
        {sortedNotComplete.map((todo) =>
          <li key={todo.id} style={{ display: selectedSort === 'Completed' ? 'none' : null }}>
            {selectedSort === 'Not Completed' ? todo.enteredTodo : null}
            <button onClick={() => handleDelete(todo)} className='outputButton'>Delete</button>
            <button onClick={() => handleToggle(todo)} className='outputButton'>Complete</button>
          </li>)}
      </ul>
      <ul>
        {sortedComplete.map((todo) =>
          <li key={todo.id} style={{ display: selectedSort === 'Not Completed' ? 'none' : null }}>
            {selectedSort === 'Completed' ? todo.enteredTodo : null}
            <button onClick={() => handleDelete(todo)} className='outputButton'>Delete</button>
            <button onClick={() => handleToggle(todo)} className='outputButton'>Do again</button>
          </li>)}
      </ul>
    </div>
  )
}

export default TodoOutput