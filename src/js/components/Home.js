import React from "react";
import {Link, Route} from "react-router";
import InventoryEditor from "./AddOrderList/combine.js";
import DisplayOrderList from "./DisplayOrderList/combine.js";
import TotalPrice from "./TotalPrice/combine.js";


export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="orderList-main" class="container">
        <h1>React Order Editor</h1>
          <div className="row">
            <div className="col-xs-4"><DisplayOrderList></DisplayOrderList></div>
            <div className="col-xs-3"><TotalPrice></TotalPrice></div>
            <div className="col-xs-5"><InventoryEditor></InventoryEditor></div>
          </div>
      </div>
    );
  }
}
