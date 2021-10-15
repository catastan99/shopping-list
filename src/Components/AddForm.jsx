import React from "react";
import '../style/AddForm.css'
import {ReactComponent as Check} from '../assets/icons/check.svg';


class AddForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            displayCheckInputName:"none",
            displayCheckInputQuantity:"none",
            displayLabelName:"hidden",
            displayLabelQuantity:"hidden",
            name:"",
            quantity:0,
            unit:""
        }
    }

    handleChangeName(event){
        const  productName=event.target.value;
        this.setState({name:productName});
        
        if(productName.length>2) 
            this.setState({displayCheckInputName:"block"});
            else   this.setState({displayCheckInputName:"none"});

        if(productName.length!="")
            this.setState({displayLabelName:"visible"})
        else
            this.setState({displayLabelName:"hidden"});
          
    
    }

    handleChangeQuantity(event){
        const  quantity=event.target.value;
        this.setState({quantity, displayCheckInputQuantity:"block"});
        if(quantity!="") 
            this.setState({displayLabelQuantity:"visible"});
        else
            this.setState({displayLabelQuantity:"hidden"});
    
    }

    handleChangeUnit(event){
        const  unit=event.target.value;
        console.log(unit);
        this.setState({unit});

    }
    handleFormSubmit(event){
        event.preventDefault();
        const newProduct={
            name:this.state.name,
            quantity:this.state.quantity,
            unit:this.state.unit
        }
        this.props.submitAddForm(newProduct);
    }

    

    render(){
       
     
        return (
            <div className="AddForm">
                <form onSubmit={(event)=>this.handleFormSubmit(event)}>
                    <div className="row">
                        <label htmlFor="product" style={{visibility:this.state.displayLabelName}}>Produs:</label>
                        <div className="container-input">
                            <input type="text" name="product" onChange={(event)=>this.handleChangeName(event) } placeholder="Produs"/>
                            <Check style={{display:this.state.displayCheckInputName}} className="input-check-icon"/>
                        </div>
                    </div>

                    <div className="row">
                        <label htmlFor="quantity" style={{visibility:this.state.displayLabelQuantity}}>Cantitate:</label>
                        <div className="container-input">
                            <input type="number" min="1" name="quantity"  onChange={(event)=>this.handleChangeQuantity(event)} placeholder="Cantitate"/>
                            <Check style={{display:this.state.displayCheckInputQuantity}} className="input-check-icon"/>
                        </div>
                    </div>

                    <div className="row">
                        <label htmlFor="unit">Unitate de măsură</label>                        
                        <div className="container-input">
                            <select name="unit" onChange={(event)=>this.handleChangeUnit(event)}>
                                <option>Bucati</option>
                                <option>Kilograme</option>
                                <option>Grame</option>                        
                                <option>Litri</option>
                                <option>Mililitri</option>
                            </select>
                            
                        </div>
                    </div>

                    <input type="submit" value="ADAUGĂ PRODUS" />
                </form>
            </div>
        );
    }


}
export default AddForm;