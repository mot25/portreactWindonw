import React, { useContext } from "react";
import {Context} from "../Context"
import GoodItem from "./GoodItem";
export default function GoodsItems() {
  const {goods} = useContext(Context)
  if (!goods.length) {
    return <h3>Error</h3>;
  }
  return (
    <>
      {goods.map((item) => (
        <GoodItem key={item.id} propsItem={item} />
      ))}
    </>
  );
}
