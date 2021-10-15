
import React from 'react';
import '../style/ProductItem.css';

class ProductItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
            color:'red'
        }
    }

    handleChangeBorderColor(event){
        
        if(event.currentTarget.style.borderLeftColor==="red")
            this.setState({color:"green"});
            else this.setState({color:"red"});
            console.log(this.state.color);
    }

    render(){
    const { name , quantity, unit, id} = this.props
    
    return (
        <div className="ProductItem" id={id} onDoubleClick={(event) => this.handleChangeBorderColor(event)} style={{borderLeftColor:this.state.color}} >
            <h3>{name}</h3>
            <p>{quantity} {unit}</p>
            
        </div>
    )

    }
}

export default ProductItem
