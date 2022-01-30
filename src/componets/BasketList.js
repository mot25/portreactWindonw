import React, { useContext } from 'react';
import { Context } from '../Context';
import BasketItem from "./BasketItem"


export default function BasketList() {
    const { order } = useContext(Context)
    let sum = order.reduce((sum, item) => {
        return sum + item.count * item.price
    }, 0)
    return <ul className="collection">
        <li className="collection-item active">Basket</li>
        {order.length ? order.map(item => {
            return <BasketItem key={item.id} id={item.id} name={item.name} price={item.price} count={item.count} />
        }) : <h5>basket zero items</h5>}
        <li className="collection-item active">All sum: {sum}</li>
    </ul>
}
