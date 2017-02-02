import React from "react";
import {PriceTag, GetTotalPrice} from './components';

export default class TotalPrice extends React.Component {
  // const { orders } = props;
  constructor() {
    super();
  }

  render() {
    return (
      <div id="orderList-totalPrice">
        <h5>Total Price</h5>
          { this.props.orders.map(o =>
            <PriceTag
              key = {o._id}
              price={o.price}
            />
          ) }
          <h6>Total : ${GetTotalPrice(this.props.orders)}</h6>
      </div>
    );
  }
}
