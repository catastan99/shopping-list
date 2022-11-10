import React from "react";
import "./App.css";
import AddForm from "./Components/AddForm";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 0,
          name: "Apa plata",
          quantity: "10",
          unit: "bucati",
        },
        {
          id: 1,
          name: "Zahar",
          quantity: "100",
          unit: "grame",
        },
        {
          id: 2,
          name: "Portocale",
          quantity: "5",
          unit: "kilograme",
        },
      ],
    };
  }

  submitAddForm(product) {
    product.id = this.state.products.length;
    this.setState((prevState) => {
      return {
        products: [...prevState.products, product],
      };
    });
  }

  deleteProduct(id) {
    const products = [...this.state.products];
    products.map((product, index) => {
      if (product.id === id) products.splice(index, 1);
      return null;
    });

    this.setState({ products });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddForm submitAddForm={(product) => this.submitAddForm(product)} />
        <ProductList
          products={this.state.products}
          deleteProduct={(id) => this.deleteProduct(id)}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
