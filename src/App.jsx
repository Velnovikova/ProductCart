/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import React from 'react';
import DownPanel from './components/DownPanel';
import Item from './components/item';
import products from './data/data.json';
import ModalButton from './components/ModalForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products };
  }

  removeItem = (index) => (e) => {
    e.preventDefault();
    const { products } = this.state;
    this.setState({ products: products.filter((product) => product.id !== index) });
  };

  handleSave = (id, quantity, buttonFunction) => {
    const { products } = this.state;
    this.setState({
      products: products.map((item) => {
        if (item.id === id) {
          item.amount = Number(quantity);
        }
        return item;
      }),
    });
    buttonFunction();
  };

  render() {
    const { products } = this.state;

    return (
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <Item
              value={product}
              onRemove={this.removeItem(product.id)}
              handleSave={this.handleSave}
            />
          </div>
        ))}
        <DownPanel arr={products} />
        <ModalButton />
      </div>
    );
  }
}
