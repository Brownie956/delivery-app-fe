import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import './counter.css'

class Counter extends Component {
    styles = {
        fontSize: 15,
        fontWeight: 'bold'
    };

    render() {
        return (
            <React.Fragment>
                <span id={"item-name-" + this.props.id} className="counter-name border-right">{this.props.counter.name}</span>
                <span id={"count-" + this.props.id} style={this.styles} className={this.getLabelClasses()}>{this.formatCount()}</span>
                <Button
                    id={"increment-" + this.props.id}
                    className="btn btn-secondary btn-sm ml-1 mr-2"
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    type='button'
                >+</Button>
                <Button
                    id={"decrement-" + this.props.id}
                    className="btn btn-secondary btn-sm ml-1 mr-1"
                    onClick={() => this.props.onDecrement(this.props.counter)}
                    type='button'
                >-</Button>
                <Button
                    id={"delete-" + this.props.id}
                    className="btn btn-danger btn-sm ml-1"
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    type='button'
                >Delete</Button>
            </React.Fragment>
        )
    }

    getLabelClasses() {
        let labelClasses = "counter-label badge m-2 badge-";
        labelClasses += this.props.counter.value === 0 ? "warning" : "primary";
        return labelClasses;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;