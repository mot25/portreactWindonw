import React, { useEffect, useState, useContext } from "react";
import { API_KEY, API_URL } from "../config.js";
import "./Main.css";
import Prelodaer from "./Prelodaer";
import GoodsItems from "./GoodsItems";
import Cart from './Cart'
import BasketList from "./BasketList"
import { Context } from "../Context.js";


export default function Main() {
  // const [order, setorder] = useState([]);
  const { isBasketShow, setisLooding, saveOrder,setorder, isLooding, addGoods, order, goods } = useContext(Context)
  console.log('order', order)


  useEffect(() => {
    saveOrder()
  }, [order]);
  useEffect(() => {
    fetchGoods();
    if (localStorage.getItem('order')) {
      setorder(JSON.parse(localStorage.getItem('order')))
    }
  }, []);
  const fetchGoods = () => {
    // 00c86206-084fb338-98170e6a-5c170821
    fetch('https://fortniteapi.io/v2/items/upcoming?lang=en', {
      headers: {
        Authorization: '00c86206-084fb338-98170e6a-5c170821',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        addGoods(data.items);
        setisLooding(false);
      });
  };
  return (
    <div className="main">
      {isBasketShow ? <BasketList /> : null}
      <Cart quantity={order.length === 0 ? '0' : order.length} />
      <div className="wrapper">
        {isLooding ? <Prelodaer /> : <GoodsItems />}
      </div>
    </div>
  );
}
