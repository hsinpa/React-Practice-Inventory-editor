import React from "react";

export function PriceTag(prop) {
  return (
    <div class="orderList-totalPrice-sPrice">
        ${parseInt(prop.price)}
    </div>
  );
}

export function GetTotalPrice(priceArray) {
  let t_price = 0;
  priceArray.forEach(function(o) {
    t_price += parseInt( o.price );
  });
  return t_price;
}
