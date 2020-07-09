import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
import {shallow} from "enzyme";

test('renders without crashing', () => {
    const div = document.createElement('div');
    const counter = {id: 1, value: 0, name: "example"};
    ReactDOM.render(<Counter counter={counter}/>, div);
    shallow(<Counter counter={counter}/>, div);
});
