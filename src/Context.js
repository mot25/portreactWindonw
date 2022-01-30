import React, { createContext, useReducer } from 'react'
import { reducer } from './componets/reducer.js'


export const Context = createContext()


const initState = {
    goods: [],
    isLooding: true,
    order: [],
    isBasketShow: false
}

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initState)
    console.log('value', value)
    value.isBasketShowFun = () => {
        dispatch({ type: 'BASKET_SHOW' })
    }
    value.removeorder = (id) => {
        dispatch({ type: 'REMOVE_ORDER', payload: { id } })
    }
    return <Context.Provider value={value}>
        {children}
    </Context.Provider>
}
