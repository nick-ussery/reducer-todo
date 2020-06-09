// import React from 'react';
import {v4 as uuid} from 'uuid';

export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]

export const reducer = (state, action) =>{
    switch(action.type)    {
        case 'CLEAR_COMPLETED':
            return state.filter(task=>{
                return task.completed === false
            })
        case 'TOGGLE_COMPLETED':

            let updatedTask = state.filter(task=>{return task.id === action.payload})            
            updatedTask = updatedTask[0]
            let index = state.indexOf(updatedTask)
            console.log('index of updated task', index)
            updatedTask.completed = !updatedTask.completed
             return[
                 ...state,
                 state[index].completed = !state[index].completed
             ]

        case 'ADD_TODO':
            return[
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: uuid()
                }
            ]
        default:
            return state
    }
}