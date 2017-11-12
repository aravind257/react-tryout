
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

//Purecomponent comes with shouldComponentUpdate implemented by default
 export default class CartSummary extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            discount: true
        }
        //this.discount wont be able to render with setState
        //this.discount = true
        
    }
    
    componentDidMount() {
        
    }

    applyDiscount(){
        //calls shouldComponentUpdate
        this.setState({discount: !this.state.discount,
                
        });
    }

    //only called when parent sends in props
    componentWillReceiveProps(nextProps){
        console.log("summary next props",nextProps);
        console.log("summary current props",this.props);
    }

    //called when parent render
    //called when current component setState
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log("cart summary shouldComponentUpdate");
    //     console.log("should update, current state",this.state);
    //     console.log("should update, current state",nextState);
    //     if(this.props.count!=nextProps.count || 
    //         this.props.amount != nextProps.amount ||
    //         this.state.discount!=nextState.discount
    //     ){
    //         return true;
    //     }
    //     return false;
    // }
 
  
    render() {
        console.log("CartSummary render");
        
        return (
            <div> 
            
            <h2>Total Items {this.props.count}</h2>
            <h2>Amount  {this.props.amount}</h2>
            {
                this.state.discount &&
                <p>{this.props.amount-1000}</p>
            }

            <button onClick={()=>this.applyDiscount()}>
                Apply Discount
            </button>
            </div>
        )
    }
} 

 