import React from "react";
import GoodItem from "./GoodItem";
export default function GoodsItems({ propsGoods }) {
  if (!propsGoods.length) {
    return <h3>Error</h3>;
  }
  return (
    <>
      {propsGoods.map((item) => (
        <GoodItem key={item.id} propsItem={item} />
      ))}
    </>
  );
}
