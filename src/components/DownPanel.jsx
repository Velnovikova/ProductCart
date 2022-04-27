import React from 'react';
import '../css/DownPanel.css';

export default function DownPanel(props) {
  const { arr } = props;
  return (
    <div>
      <dl className="row">
        <dt className="col-sm-3">Shopping Info</dt>
        <dd className="col-sm-9">
          Total Items:
          {arr.length}
        </dd>
        <dd className="col-sm-9">
          Total Amount:
          {arr.reduce((acc, item) => acc + item.price * item.amount, 0)}
          $
        </dd>
        <dd className="col-sm-9">
          Number of Goods:
          {arr.reduce((acc, item) => acc + item.amount, 0)}
        </dd>
        <dd className="col-sm-9">
          Average Price:
          {arr.length === 0 ? 0 : ((arr.reduce((acc, item) => acc + item.price * item.amount, 0))
          / arr.length).toFixed(2)}
        </dd>
      </dl>
    </div>
  );
}
