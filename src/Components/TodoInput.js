import React, { useState } from 'react'
import firebase from '../firebase'
import 'firebase/firestore'


function TodoInput() {
  const db = firebase.firestore()
  const complete = false
  const [enteredTodo, setEnteredTodo] = useState('')

  function onChange(e) {
    setEnteredTodo(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()
    if (enteredTodo !== '') {
      db.collection('todoList').add({
        enteredTodo,
        complete
      }).then(() => {
        setEnteredTodo('')
      })
    }
  }

  return (
    <div className='inputDiv'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Enter todo item'
          value={enteredTodo}
          onChange={onChange} />
        <button className='myButton'>Enter</button>
      </form>
    </div>
  )
}

export default TodoInput