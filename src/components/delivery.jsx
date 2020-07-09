import React, {Component} from 'react';
import DeliveryList from "./deliveryList";

class Delivery extends Component {
    state = {
        deliveryMethods: [],
    };

    componentDidMount() {
        fetch('/delivery-methods')
            .then(res => res.json())
            .then(deliveryMethods => this.setState({ deliveryMethods: deliveryMethods }));
    }

    // handleSelectDelivery = (method) => {
    //     console.log(method.target.value);
    //     this.setState({selectedMethod: method.target.value});
    // };

    render() {
        const {onSelectDelivery, defaultDeliveryMethod} = this.props;

        return (
            <div className="border-top mt-3">
                <h2 className="mt-3">Delivery options</h2>
                <p>Please select your delivery method</p>
                <DeliveryList
                    onSelectDelivery = {onSelectDelivery}
                    deliveryMethods = {this.state.deliveryMethods}
                    defaultDelivery = {defaultDeliveryMethod}
                />
            </div>
        );
    }
}

export default Delivery;