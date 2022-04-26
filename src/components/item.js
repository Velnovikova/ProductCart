import { List, Input, InputNumber, Button, Avatar } from 'antd'
import { DeleteOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons'
import { VerticalAlignBottomOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import '../css/item.css'
export default function Item(props) {


    const [count, setCount] = useState(1)
    const [buttonState, setButtonState] = useState('Edit')
    const [disabled, setDisabled] = useState(true)

    
    const buttonStateFunction = () => {
        if (buttonState === 'Edit') {
            setButtonState('Save')
            setDisabled(false)
        }
        else {
            setButtonState('Edit')
            setDisabled(true)
        }
    }


    return (
        <List >
            <List.Item className='item'>
                <Avatar className='image' src={props.value.picture} />
                <List.Item.Meta className='item-name' title={props.value.name} description={props.value.description} />
                <Input placeholder={props.value.price+'$'} disabled className='input-price' />
                <InputNumber className='input-count' disabled={disabled} value={count} type="number" min="1" max="10" onChange={(value) => { setCount(value) }} />
                <Button type='primary' onClick={() => { props.handleSave(props.value.id, count, buttonStateFunction) }}>{buttonState === 'Edit' ? <div><EditOutlined className='icon' />Edit</div> : <div><VerticalAlignBottomOutlined className='icon' />Save</div>}</Button>
                <Button type='danger' onClick={props.onRemove}><DeleteOutlined />Delete</Button>
            </List.Item>
            <hr color='white' />

        </List>
    )
}
