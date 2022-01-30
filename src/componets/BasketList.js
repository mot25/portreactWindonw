import React, { useContext } from 'react';
import BasketItem from "./BasketItem"
import { Context } from '../Context'

export default function BasketList(props) {
    const { order, setorder } = useContext(Context)
    let sum = order.reduce((sum, item) => {
        return sum + item.count * item.price
    }, 0)
    const { list } = props;
    console.log('list', list)
    return <ul className="collection">
        <li className="collection-item active">Basket</li>
        {list.length ? list.map(item => {
            return <BasketItem key={item.id} id={item.id} name={item.name} price={item.price} count={item.count} />
        }) : <h5>basket zero items</h5>}
        <li className="collection-item active">All sum: {sum}</li>
    </ul>
}
