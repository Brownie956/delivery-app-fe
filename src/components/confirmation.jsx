import React, {Component} from 'react';

class Confirmation extends Component {

    componentDidMount() {
        console.log("Basket", this.props.basket);
    }


    render() {
        return (
            <div>
                <h2>Great!</h2>
                {this.props.basket.map(item =>
                    <p>Item {item.id} - {item.value} selected</p>
                )}
                <p>Delivery Method: {this.props.deliveryMethod}</p>
            </div>
        );
    }
}

export default Confirmation;
