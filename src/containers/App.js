import React, { useState, useEffect } from 'react';
import {
    Switch,
    Route,
    Link, 
    withRouter
} from "react-router-dom";

import NavBar from '../components/NavBar';
import Home from '../pages/Home';
import Category from '../pages/Category';
import CalPrograms from '../pages/CalPrograms';
import CalProgramTracker from '../pages/CalProgramTracker';
import NewProgramTracker from '../pages/NewProgramTracker';
import Footer from '../components/Footer';
import Test from '../pages/Test';

// import { css } from "@emotion/core";
import SyncLoader from "react-spinners/SyncLoader";


import './App.scss';

const App = (props) => {

    const [staticData, setStaticData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState('#F15A24');

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:3030/app-static')
            .then(res=> res.json())
            .then(
                (result) => {
                    setStaticData(result);
                    setLoading(false);
                }
            )
    }, []);

    return (
        <>
        {loading === true ?
            <div className="app-wrapper">
                <div className="row loading-row-main text-center">
                    <div className="col-12 loading-spinner">
                        <SyncLoader color={color} size={20} />
                    </div>
                    <div className="col-12 loading-title">
                        <h3 className="mt-5 mb-5">The website is loading. Please wait.</h3>
                    </div>
                </div>
            </div>
            :
            <div className="app-wrapper">
                <NavBar />
                <Switch>
                    <Route path="/category">
                        <Category />
                    </Route>
                    <Route path="/calisthenics-programs">
                        <CalPrograms />
                    </Route>
                    <Route path="/calisthenics-program-tracker">
                        <CalProgramTracker />
                    </Route>
                    <Route path="/new-program-tracker">
                        <NewProgramTracker />
                    </Route>
                    <Route path="/test">
                        <Test />
                    </Route>
                    <Route path="/">
                        <Home cards={staticData.cards}/>
                    </Route>
                </Switch>
                <Footer />
            </div>
        }
        </>
    );
}

export default withRouter(App);