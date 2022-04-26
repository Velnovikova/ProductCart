import React from "react";
import '../css/DownPanel.css';


export default function DownPanel(props) {  
    return(
        <div>
        <dl className="row">
  <dt className="col-sm-3">Shopping Info</dt>
  <dd className="col-sm-9">Total Items: {props.arr.length}</dd>
  <dd className="col-sm-9">Total Amount: {props.arr.reduce((acc,item)=>acc+item.price*item.amount,0)}$</dd>
  <dd className="col-sm-9">Number of Goods: {props.arr.reduce((acc,item)=>acc+item.amount,0)}</dd>
  <dd className="col-sm-9">Average Price: {props.arr.length===0?0:((props.arr.reduce((acc,item)=>acc+item.price*item.amount,0))/props.arr.length).toFixed(2)}</dd>
  </dl>
  </div>
    )
    }

