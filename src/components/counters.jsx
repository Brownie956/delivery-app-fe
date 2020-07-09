import React, {Component} from 'react';
import Counter from "./counter";
import "./counters.css"
import {Button} from "react-bootstrap";

class Counters extends Component {
    render() {
        const {onReset, counters, onDelete, onIncrement, onDecrement, onAddItem} = this.props;

        return (
            <div>
                <h2 className="mt-3">Order list</h2>
                <Button
                    className="btn btn-primary btn-sm m-2"
                    onClick={onReset}
                    type='button'
                >Reset</Button>
                <ul className="counters-list m-2 p-0">
                    {counters.map(counter =>
                        <li key={"li-" + counter.id}>
                            <Counter
                                key={counter.id}
                                onDelete={onDelete}
                                onIncrement={onIncrement}
                                onDecrement={onDecrement}
                                counter={counter}
                            />
                        </li>
                    )}
                </ul>
                <Button
                    className="btn btn-primary btn-sm m-2"
                    onClick={onAddItem}
                    type='button'
                >Add item</Button>
            </div>
        )
    }
}

export default Counters;