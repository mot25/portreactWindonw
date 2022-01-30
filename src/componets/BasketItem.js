import React, { useContext } from 'react';
import { Context } from '../Context'
export default function BasketItem({ id, name, price, count }) {

    const { order, setorder } = useContext(Context)
    console.log('order', order)
    const deleteOrder = (e) => {
        setorder(order.filter(x => x.id !== e.target.dataset.id))
    }
    const deck = (e) => {
        setorder(order.map(item => {
            if (item.id === e.target.dataset.id) {
                return { ...item, count: item.count > 0 ? item.count - 1 : 0 }
            } else {
                return item
            }
        }))
    }
    const inc = (e) => {
        setorder(order.map(item => {
            if (item.id === e.target.dataset.id) {
                return { ...item, count: item.count + 1 }
            } else {
                return item
            }
        }))
    }
    return <li className="collection-item">{name} {price}  x <span onClick={deck} data-id={id} className="counter_edit deck">-</span> {count} <span onClick={inc} data-id={id} className="counter_edit inc">+</span> = {price * count} руб. <div data-id={id} onClick={(e) => deleteOrder(e)} className="secondary-content"><i data-id={id} className="material-icons">close</i></div></li>

}
