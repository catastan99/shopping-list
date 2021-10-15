// import logo from './logo.svg';
import React from 'react';
import './App.css';
import AddForm from './Components/AddForm';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProductList from './Components/ProductList';

class App extends React.Component {

  constructor(){
    super()
    this.state={
        products:[
          {
            id:"0",
            name: "Apa plata",
            quantity: "10",
            unit: "kg"
          },
          {
            id:"1",
            name: "Tymbark",
            quantity: "1011",
            unit: "litri"

          },
          {
            id:"2",
            name: "Tymbark",
            quantity: "1011",
            unit: "litri"

          }
        ]
    }
  }

  submitAddForm(product){
    
    product.id=this.state.products.length;
    this.setState(prevState => {
      return{
        products:[
          ...prevState.products,
          product
        ]
      }
    })  ;

  }

  render(){
  return (

    <div className="App">
        <Header />
        <AddForm submitAddForm={(product)=> this.submitAddForm(product)}/>
        <ProductList products={this.state.products} />
        <Footer />
    </div>
  );


  }
}

export default App;
