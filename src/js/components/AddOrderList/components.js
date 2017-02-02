import React from 'react';
import Immutable from 'immutable';
import {AssignValue} from '../../utility';

export function IndividualInventoryList (props) {
  let {p_order, onFormSubmit, onInputChange, onRemoveForm} = props;

  //Create a unSave order
  if (p_order._id == null) {

  }

  const onSubmit = (event) => {
    event.preventDefault();

    if ( p_order.publish == false ) {
      onFormSubmit(p_order._id);
    } else {
      console.log(onRemoveForm);

      onRemoveForm(p_order._id);
    }
  },onTextHandler = (event) => {
    onInputChange({
      _id : p_order._id,
      name : event.target.name,
      value : event.target.value
    });
  }, SwitchSubmitBt = () => {
    if ( p_order.publish == false ) {
      return <input type="submit" value="Add Item" className="btn btn-default btn-block"></input>;
    } else {
      return <input type="submit" value="Remove" className="btn btn-warning btn-block"></input>;
    }
  };

  return (
    <form class="orderList-inventory-individual" onSubmit={ onSubmit.bind(this) }>
      <div class="row">
        <input type="text" name="name" value={p_order.name} class="col-xs-4" onChange={onTextHandler} placeholder="Name"></input>
        <input type="number" name="price" value={p_order.price} class="col-xs-4" onChange={onTextHandler} placeholder="Price"></input>
        <select name="freshness"  class="col-xs-4" onChange={onTextHandler} value={p_order.freshness}>
          <option value="fresh">Fresh</option>
          <option value="rotten">Rotten</option>
        </select>
      </div>
      <div class="row">
        <textarea name="description" placeholder="Short Description . . ." onChange={onTextHandler} value={p_order.description}></textarea>
      </div>
      {SwitchSubmitBt()}
    </form>
  );
}

export default function InventoryEditor(props) {
  const { orders, onFormSubmit, onInputChange, onRemoveForm } = props;

  return (
    <div class="orderList-inventory">
        { orders.map(o =>
          <IndividualInventoryList
            key = {o._id}
            p_order={o}
            onFormSubmit={onFormSubmit}
            onInputChange={onInputChange}
            onRemoveForm={onRemoveForm}
          />
        ) }
    </div>
  )
}
