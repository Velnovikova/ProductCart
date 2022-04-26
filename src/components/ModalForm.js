import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import '../css/Modal.css';

export default function ModalButton() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const modalClick = () => {
        setIsModalVisible(true);
    }
    const handleOk = () => {
        setIsModalVisible(false)
        
    }
    const handleCancel = () => {
        setIsModalVisible(false)
    }

    return (
        <div><Button type='primary' onClick={modalClick} className='order-button'>Confirm the order</Button>
            <Modal title="Basic Modal" visible={isModalVisible} onCancel={handleCancel} onOk={handleOk}>
                <Form> 
                    <Form.Item label='Name' name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Surname" name="surname" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="phone" label="Phone Number" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                        <Input addonBefore='+7' style={{ width: '100%' }} />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}