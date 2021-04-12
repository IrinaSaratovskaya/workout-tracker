import React from 'react';
import { withRouter } from 'react-router-dom';

const Footer = (props) => {


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
        <footer role="contentinfo" className="site-footer">
            <div className="container">
                <div className="row footer-content">
                    <div className="col-6">
                        <div className="footer-logo">
                            <span className="footer-icon"><i className="fas fa-forward"></i></span>
                            <span className="">WORKOUT TRACKER</span>
                        </div>
                    </div>
                    <div className="col-3">
                        <ul className="list-unstyled footer-menu">
                            <li>
                                <a href="#" onClick={openMainPage}>Home</a>
                            </li>
                            <li>
                                <a href="#" onClick={showCategory}>Choose Workout</a>
                            </li>
                            <li>
                                <a href="#" onClick={showNewTracker}>Add Workout</a>
                            </li>
                            <li>
                                <a href="#">Login <i class="fas fa-sign-in-alt"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="list-unstyled footer-contacts">
                            <li className="contacts-title">Contacts:</li>
                            <li>Tel: +7 925 152 2219</li>
                            <li>Email: wtracker@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex align-items-end justify-content-center">
                        <div className="footer-copyright text-center "> Irina Saratovskaya &copy; 2020 All Rights Reserved </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default withRouter(Footer);