import React, {Component} from 'react';
import './deliveryList.css';

class DeliveryList extends Component {

    render() {
        const {onSelectDelivery, deliveryMethods, defaultDelivery} = this.props;

        return (
            <React.Fragment>
                    {deliveryMethods.map(deliveryMethod =>
                        <div key={deliveryMethod.method}>
                            <input
                                type="radio"
                                className="m-2"
                                id={deliveryMethod.method}
                                name="deliveryMethod"
                                value={deliveryMethod.method}
                                onChange={onSelectDelivery}
                                checked={defaultDelivery === deliveryMethod.method}/>
                            <label htmlFor={deliveryMethod.method}>{deliveryMethod.formattedName + ": £" + deliveryMethod.price.toPrecision(3)}</label>
                        </div>
                    )}
            </React.Fragment>
        );
    }
}

export default DeliveryList;