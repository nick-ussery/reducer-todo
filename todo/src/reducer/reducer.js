// import React from 'react';
import {v4 as uuid} from 'uuid';

export const initialState = {
    todos:[{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },{
        item: 'Task 1',
        completed: false,
        id: uuid()
    }]
}

export const reducer = (state, action) =>{
    switch(action.type)    {
        case 'CLEAR_COMPLETED':

            return{
                ...state,
                todos:state.todos.filter(todo=>{
                        return todo.completed === false
                })
                
            }
        case 'TOGGLE_COMPLETED':
            // console.log('toggle start')

            return {
                ...state,
                todos: state.todos.map(todo=>{
                    if(todo.id === action.payload){
                        return {...todo, completed: !todo.completed}
                    }else{ return {...todo}}
                })
            }
            
        case 'ADD_TODO':
            return{
                ...state,
                todos:[...state.todos, 
                {
                    item: action.payload,
                    completed: false,
                    id: uuid()
                }]
    }
        default:
            return state
    }
}