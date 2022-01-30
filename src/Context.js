import React, { createContext, useReducer } from 'react'
import { reducer } from './componets/reducer.js'


export const Context = createContext()


const initState = {
    goods: [],
    isLooding: true,
    order: [],
    isBasketShow: false
}

export const ShopProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initState)
    console.log('value', value)
    value.isBasketShowFun = () => {
        dispatch({ type: 'BASKET_SHOW' })
    }
    value.removeorder = (id) => {
        dispatch({ type: 'REMOVE_ORDER', payload: { id } })
    }
    value.saveOrder = () => {
        dispatch({ type: 'SAVE_ORDER'})
    }
    value.addGoods = (data) => {
        dispatch({ type: 'ADD_GOODS', payload: { data } })
    }
    value.setorder = (data) => {
        dispatch({ type: 'SET_ORDER', payload: { data } })
    }
    value.setisLooding = (data) => {
        dispatch({ type: 'SET_LOADING', payload: { data } })
    }
    return <Context.Provider value={value}>
        {children}
    </Context.Provider>
}
