import React, {useState, useReducer, useEffect} from 'react';
import {reducer, initialState} from '../reducer/reducer'





const Todo = () =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    const [values, setValues] = useState('')
    const handleChanges = e =>{
        setValues(e.target.value)
    }
    const addTodo = (e) => {
        e.preventDefault();
        // console.log('button clicked')
        dispatch({type: 'ADD_TODO', payload: values})
    }

    // console.log('state before mapping', state.todos)

    
    const [list, setList] = useState(state.todos.map(todo=>{
        // console.log('todo given to mapping', todo)
        return (<div style={(todo.completed===true) ? {marginLeft: 'auto', marginRight: 'auto',width: '500px',border: '1px solid black',background:'red'} : {marginLeft: 'auto', marginRight: 'auto',width:'500px',border: '1px solid black',background:'white'}} key={todo.id}>
            <p>{todo.item}</p>
                completed: {todo.completed.toString()}
                <button onClickCapture= {e =>{                            
                    e.preventDefault()
                    e.bubbles = false
                    dispatch({
                    type: 'TOGGLE_COMPLETED',
                    payload: todo.id
                })
                }}>Completed?</button>
        </div>)}))
    // console.log('state',list)
    useEffect(()=>{
        if(state.todos.length === undefined){return (<div>No Current Tasks</div>)}
        setList(
        state.todos.map(todo=>{
            // console.log('todo given to mapping', todo)
            return (<div style={(todo.completed===true) ? {marginLeft: 'auto', marginRight: 'auto',width: '500px',border: '1px solid black',background:'red'} : {marginLeft: 'auto', marginRight: 'auto',width:'500px',border: '1px solid black',background:'white'}} key={todo.id}>
                <p>{todo.item}</p>
                    completed: {todo.completed.toString()}
                    <button onClickCapture= {e =>{                            
                        e.preventDefault()
                        e.bubbles = false
                        dispatch({
                        type: 'TOGGLE_COMPLETED',
                        payload: todo.id
                    })
                    }}>Completed?</button>
            </div>)}))
    }
    
    ,[state])

    return (
        <div style= {{marginLeft: 'auto', marginRight: 'auto',}}>
            {list}

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
