import React, {useState, useReducer} from 'react';
import {reducer, initialState} from '../reducer/reducer'

const Todo = () =>{
    const [values, setValues] = useState('')
    const handleChanges = e =>{
        setValues(e.target.value)
    }

    const addTodo = (e) => {
        e.preventDefault();
        e.stopPropogation()
        // console.log('button clicked')
        dispatch({type: 'ADD_TODO', payload: values})
    }



    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log('state',state)

    return (
        <div style= {{marginLeft: 'auto', marginRight: 'auto',}}>
            {state.map(todo =>{
                return(
                    <div style={(todo.completed===true) ? {marginLeft: 'auto', marginRight: 'auto',width: '500px',border: '1px solid black',background:'red'} : {marginLeft: 'auto', marginRight: 'auto',width:'500px',border: '1px solid black',background:'white'}} key={todo.id}>
                        <p>{todo.item}</p>
                        completed: {todo.completed.toString()}
                        <button onClickCapture= {e =>{
                            e.stopPropagation()
                            e.preventDefault()
                            e.bubbles = false
                            dispatch({
                                type: 'TOGGLE_COMPLETED',
                                payload: todo.id
                            })
                        }}>Completed?</button>

                    </div>
                )
            })}

            <input 
            type='text'
            value={values}
            onChange={handleChanges}
            />
            <button onClick={addTodo}>Add Todo</button>
            <button onClick={e=>{
                    e.preventDefault()
                    dispatch({
                    type: 'CLEAR_COMPLETED'
                    })
            }}>Clear Completed</button>
        </div>
    )
}

export default Todo
