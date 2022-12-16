import React, { Component } from "react";
import { Box, Typography } from "@mui/material";
import CartItem from "./CartItem";
import CartProduct from "./CartProduct";
import CartButton from "./CartButton";
import ProductPrice from "./ProductPrice";

export default class Cart extends Component {
  state = {
    total: 0,
    counts: {},
    prices: {},
    products: [
      {
        id: 1,
        name: "Iphone 14 ",
        price: 920,
      },
      {
        id: 2,
        name: "Samsung S22 Ultra ",
        price: 900,
      },
      {
        id: 3,
        name: "Huawei P50 Pro ",
        price: 1000,
      },
      {
        id: 4,
        name: "Xiaomi Note 10 ",
        price: 280,
      },
    ],
  };

  handleIncrement = (id) => {
    const { counts, total } = this.state;
    const newCount = counts[id] ? ++counts[id] : 1;
    this.setState({
      counts: {
        ...counts,
        [id]: newCount,
      },

      total: total + 1,
    });
  };

  handleDecrement = (id) => {
    const { counts, total } = this.state;
    const newCount = counts[id] ? --counts[id] : 1;
    if (newCount > 0) {
      this.setState({
        counts: {
          ...counts,
          [id]: newCount,
        },
        total: total - 1,
      });
    } else if (newCount === 0) {
      const filteredProducts = this.state.products.filter((l) => l.id !== id);
      this.setState({
        products: filteredProducts,
        total: total - 1,
      });
    }
  };

  handleDelete = (id) => {
    const { counts, total } = this.state;
    let newTotal = total - counts[id];
    delete counts[id];
    const filteredProducts = this.state.products.filter((l) => l.id !== id);
    this.setState({
      products: filteredProducts,
      counts,
      total: newTotal,
    });
  };

  // implementarea cu reduce pentru total price nu am reusit sa o fac, am inteles ceva dar in
  // class component nu mi-a iesit rezolvarea, daca eram in arrow function poate ma descurcam mai bine

  render() {
    const { products, counts } = this.state;
    return (
      <Box>
        {products.map(({ id, name, price }) => (
          <CartItem
            key={id}
            count={counts[id]}
            handleIncrement={() => this.handleIncrement(id)}
            handleDecrement={() => this.handleDecrement(id)}
          >
            <CartButton handleDelete={() => this.handleDelete(id)} />
            <CartProduct id={id} name={name} />
            <ProductPrice price={price} />
          </CartItem>
        ))}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mt: 4,
            ml: "250px",
            fontWeight: "bold",
          }}
        >
          <Typography variant="body" sx={{ mr: 50 }}>
            Total Items : {this.state.total}
          </Typography>
          <Typography variant="body">
            Total Price : {this.state.price}
          </Typography>
        </Box>
      </Box>
    );
  }
}
