import React, { useEffect, useState, useContext } from "react";
import { ContextProvider, Context} from "../Context.js";
import { API_KEY, API_URL } from "../config.js";
import "./Main.css";
import Prelodaer from "./Prelodaer";
import GoodsItems from "./GoodsItems";
import Cart from './Cart'
import BasketList from "./BasketList"


export default function Main() {
  const [goods, setGoods] = useState([]);
  const [isLooding, setisLooding] = useState(true);
  const [order, setorder] = useState([]);
  // const [isBasketShow, setisBasketShow] = useState(false);

  // const hadleBasketShow = () => {
  //   setisBasketShow(!isBasketShow)
  // }
const value = useContext(Context)
  console.log('value', value)
  // const {isBasketShow} = useContext(Context)
  // console.log('isBasketShow', isBasketShow)

  useEffect(() => {
    console.log('edit order');
    if (order.length) {
      localStorage.setItem('order', JSON.stringify(order))
    }
  }, [order]);
  useEffect(() => {
    fetchGoods();
    if (localStorage.getItem('order')) {
      setorder(JSON.parse(localStorage.getItem('order')))
    }
  }, []);
  const fetchGoods = () => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGoods(data.items);
        setisLooding(false);
      });
  };
  return (
    <div className="main">
      <ContextProvider>
        {/* {isBasketShow ? <BasketList list={order} /> : null} */}
        <Cart quantity={order.length === 0 ? '0' : order.length} />
        <div className="wrapper">
          {isLooding ? <Prelodaer /> : <GoodsItems propsGoods={goods} />}
        </div>
      </ContextProvider>
    </div>
  );
}

// < Context.Provider value={{
//   order, setorder
// }} >