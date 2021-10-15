import React from 'react';
import './App.css';
import AddForm from './Components/AddForm';
import Header from './Components/Header';
import ProductList from './Components/ProductList';

class App extends React.Component {

  constructor(){
    super()
    this.state={

    }
  }


  render(){
  return (
    <div className="App">
        <Header />
    </div>
  );


  }
}

export default App;
