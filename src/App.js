import React, {Component} from 'react';
import './App.css';
import Confirmation from "./components/confirmation";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import OrderForm from "./components/orderForm";

class App extends Component {
    state = {
        basket: [],
        deliveryMethod: null
    };

    handleSubmit = (basket, deliveryMethod) => {
        console.log("Basket", basket);
        console.log("Delivery Method", deliveryMethod);
        this.setState({basket: basket, deliveryMethod: deliveryMethod});
    };

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <OrderForm
                            onSubmitState={this.handleSubmit}
                        />
                    </Route>
                    <Route path="/confirmation">
                        <Confirmation
                            basket = {this.state.basket}
                            deliveryMethod = {this.state.deliveryMethod}
                        />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
