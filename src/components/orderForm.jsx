import React, {Component} from 'react';
import NavBar from "./navbar";
import '../App.css';
import Counters from "./counters";
import Delivery from "./delivery"
import {Button} from "react-bootstrap";
import {
    withRouter
} from "react-router-dom";

class OrderForm extends Component {
    state = {
        counters: [
            {id: 1, value: 0, name: "Sausages"},
            {id: 2, value: 2, name: "Peanuts"},
            {id: 3, value: 4, name: "Sandwiches"},
            {id: 4, value: 0, name: "Cornflakes"}
        ],
        deliveryMethods: [],
        selectedDeliveryMethod: "next-day"
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: counters})
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters: counters});
    };

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters: counters});
    };

    handleDecrement = (counter) => {
        if(counter.value > 0) {
            const counters = [...this.state.counters];
            const index = counters.indexOf(counter);
            counters[index] = {...counter};
            counters[index].value--;
            this.setState({counters: counters});
        }
    };

    handleAddItem = () => {
        const lastID = this.state.counters.length > 0 ? this.state.counters[this.state.counters.length - 1].id : 0;
        let state = this.state.counters.slice();
        state.push({id: lastID + 1, value: 0, name: "New item " + (lastID + 1)});
        this.setState({counters: state});
    };

    handleSubmit = (event, basket, selectedDelivery) => {
        event.preventDefault();
        console.log("form submitted");
        this.props.onSubmitState(basket, selectedDelivery);
        this.props.history.push('/confirmation');
    };

    handleSelectDelivery = (event) => {
        console.log("Order form select delivery handler");
        this.setState({selectedDeliveryMethod: event.target.value});
    };

    render() {
        return (
            <React.Fragment>
                <NavBar
                    totalCounters={this.state.counters.filter(c => c.value > 0).length}
                />
                <main className="container">
                    <form onSubmit={(event) => this.handleSubmit(event, this.state.counters.filter(item => item.value > 0), this.state.selectedDeliveryMethod)}>
                        <Counters
                            counters={this.state.counters}
                            onReset={this.handleReset}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                            onAddItem={this.handleAddItem}
                        />
                        <Delivery
                            onSelectDelivery = {this.handleSelectDelivery}
                            defaultDeliveryMethod = {this.state.selectedDeliveryMethod}
                        />
                        <Button type='submit'>Submit</Button>
                    </form>
                </main>
            </React.Fragment>
        );
    }
}

export default withRouter(OrderForm);
