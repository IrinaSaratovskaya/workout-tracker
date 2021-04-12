import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';



const NavBar = (props) => {

    console.log('props.location', props.location)
    const { location } = props;

    function openMainPage() {
        props.history.push('/')
    }
    function showCategory() {
        props.history.push('/category')
    }
    function showNewTracker() {
        props.history.push('/new-program-tracker')
    } 

    return (
        <nav className="navbar sticky-top bg-light justify-content-between">
            <div className="container">
                <div>
                    <span className="navbar-icon"><i className="fas fa-forward"></i></span>
                    <span className="navbar-text">WORKOUT TRACKER</span>
                </div>
                <div>
                    <ul className="navbar-menu list-inline">
                        <li className="list-inline-item">
                            {/* <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink> */}
                            <a className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} href="#" onClick={openMainPage}>Home</a>
                        </li>
                        <li className="list-inline-item">
                            <a className={`nav-link ${location.pathname === '/category' ? 'active' : ''}`} href="#" onClick={showCategory}>Choose Workout</a>
                        </li>
                        <li className="list-inline-item">
                            <a className={`nav-link ${location.pathname === '/new-program-tracker' ? 'active' : ''}`} href="#" onClick={showNewTracker}>Add Workout</a>
                        </li>
                        <li className="list-inline-item login">
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Login"><i className="fas fa-user-circle"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
           
        </nav>
    );
}

export default withRouter(NavBar);