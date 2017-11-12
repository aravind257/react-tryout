
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CartItem extends Component {
    constructor(props, context) {
        super(props);
        console.log("Cart Item Created", context);

        this.state = {
            qty: props.item.qty
        }
    }

    componentWillMount() {
        console.log("cart item will mount");

    }

    componentDidMount() {
        console.log("cart item did mount");
        this.inputElement.focus();

    }

    componentWillUnmount() {
        console.log("cart item will unmount");
    }

    handleChange(target) {
        let value = target;
        console.log(value);
        this.setState({
            qty: value
        })
    }

    render() {
        //let item = this.props.item
        //example of deconstruct
        let { item } = this.props;
        console.log("CartItem render ", );


        return (
            <tr>
                <td>
                    {item.name}
                </td>
                <td>
                    {item.price}
                </td>
                <td>
                    {item.qty}
                </td>
                <td>
                    {item.price * item.qty}
                </td>
                <td>
                    <input value={this.state.qty}
                        onChange={(e) => this.handleChange(e.target.value)}
                        ref={(inputElement) => this.inputElement = inputElement}
                    />
                </td>
            </tr>
        )
    }
}


CartItem.defaultProps = {

}

CartItem.propTypes = {

}
