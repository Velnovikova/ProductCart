/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import {
  List, Input, InputNumber, Button, Avatar,
}
  from 'antd';
import { DeleteOutlined, EditOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import '../css/item.css';

export default function Item(props) {
  const [count, setCount] = useState(1);
  const [buttonState, setButtonState] = useState('Edit');
  const [disabled, setDisabled] = useState(true);
  const { value, handleSave, onRemove } = props;
  const buttonStateFunction = () => {
    if (buttonState === 'Edit') {
      setButtonState('Save');
      setDisabled(false);
    } else {
      setButtonState('Edit');
      setDisabled(true);
    }
  };

  return (
    <List>
      <List.Item className="item">
        <Avatar className="image" src={value.picture} />
        <List.Item.Meta className="item-name" title={value.name} description={value.description} />
        <Input placeholder={`${value.price}$`} disabled className="input-price" />
        <InputNumber className="input-count" disabled={disabled} value={count} type="number" min="1" max="10" onChange={(number) => { setCount(number); }} />
        <Button type="primary" onClick={() => { handleSave(value.id, count, buttonStateFunction); }}>
          {buttonState === 'Edit' ? <div><EditOutlined className="icon" />Edit</div> : <div><VerticalAlignBottomOutlined className="icon" />Save</div>}
        </Button>
        <Button type="danger" onClick={onRemove}>
          <DeleteOutlined />
          Delete
        </Button>
      </List.Item>
      <hr color="white" />

    </List>
  );
}
