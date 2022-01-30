import React, { useContext } from 'react';
import { Context } from '../Context';

export default function Cart(props) {
    const { quantity = 0, } = props;
    const {isBasketShowFun} = useContext(Context)
    return <div onClick={isBasketShowFun} className="cart">
        <i className='material-icons icon_cart white-text blue lighten-1'>shopping_cart</i>
        {quantity ? <span className='cart_quantity'>{quantity}</span> : null}
    </div>;
}
