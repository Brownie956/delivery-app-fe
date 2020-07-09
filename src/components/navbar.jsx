import React, {Component} from 'react';

//Stateless functional component

// const NavBar = (props) => {
//     return (
//         <nav className="navbar navbar-light bg-light">
//             <a className="navbar-brand" href="#">
//                 Navigation Bar
//                 <span className="badge badge-pill badge-secondary">
//                     {this.props.totalCounters}
//                 </span>
//             </a>
//         </nav>
//     );
// };

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                   Number of items:
                    <span className="badge badge-pill badge-secondary">
                        {this.props.totalCounters}
                    </span>
                </a>
            </nav>
        );
    }
}

export default NavBar;
