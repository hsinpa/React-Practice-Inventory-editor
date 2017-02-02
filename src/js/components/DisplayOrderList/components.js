import React from 'react';
import Immutable from 'immutable';
import {AssignValue} from '../../utility';

export function IndividualOrderList (props) {

  return (
    <div class="orderList-displayscreen-row row">
      <div class="row">
        <p class="col-xs-4">{props.p_index}. {props.p_order.name}</p>
        <p class="col-xs-4">{props.p_order.description}</p>
        <p class="col-xs-4 price_tag">${props.p_order.price}</p>
      </div>

      <button class="btn btn-default btn-sm">Add Order</button>
    </div>
  )
}

export default function InventoryEditor(props) {
  const { orders } = props;
  return (
    <div class="orderList-displayscreen">
      <h5>Orderlist display screen</h5>
        { orders.map(o =>
          <IndividualOrderList
            key = {o._id}
            p_order={o}
            p_index={orders.indexOf(o)+1}
          />
        ) }
    </div>
  )
}
