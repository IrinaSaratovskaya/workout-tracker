import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FeaturesCard from '../../components/FeaturesCard';
import PageTop from '../../components/PageTop';


const Home = (props) => {   

    const { cards=[] } = props;

    function showCatPage() {
        props.history.push('/category')
    } 

    function showNewProgramTracker() {
        props.history.push('/new-program-tracker')
    }

    console.log('Home props', props);

    return (
        <main className="">
            <PageTop 
                pageDescription="Run faster, jump higher, trim down, or bulk up. However you exercise, this app helps you keep your commitment to physical fitness."
            > 
               <span className="subtitle-orange">Be stronger</span> than your strongest excuse 
            </PageTop>
            
            {/* Features */}
            <div className="container-fluid features">
                <div className="container">
                    {/* <div className="row">
                        <div className="col text-center">FEATURES</div>
                    </div> */}
                    <div className="row">
                        {cards.map((card) => (
                            <FeaturesCard card={card}/>
                        ))}
                    </div>
                </div>
            </div>

            {/* Facts */}
            <div className="container-fluid facts">
                <div className="container main-facts">
                    <h4 className="facts-title">About Workout Tracker</h4>
                    <p className="facts-description text-justify">Workout tracker provides programs for various sport activities, such as calisthenics, weight workouts, cardio, and much more. It is suitable for both advanced athletes and beginners who need guidance. You can also create custom workouts by stitching together exercises that are right for you.
                    </p> 
                    <div className="fact-box fact1">
                        <h4>100+</h4>
                        <p>Workout programs</p>
                    </div> 
                    <div className="fact-box fact2">
                        <h4>500k+</h4>
                        <p>App users worldwide</p>
                    </div> 
                    <div className="fact-box fact3">
                        <h4>50k+</h4>
                        <p>Daily website visits</p>
                    </div> 
                    <div className="fact-box fact4">
                        <h4>150k+</h4>
                        <p>Nutrition & diet plans</p>
                    </div>
                    <img className="fact-img" src="./images/main_page_facts1.jfif"></img> 
                </div>
            </div>

            {/* Let's start */}
            <div className="container-fluid lets-start">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2 className="start-title">Let's <span className="subtitle-orange">start!</span></h2>
                        </div>
                    </div>
                    <div className="row start-text">
                        <div className="col-5 text-center start-left">
                            Need a workout? Check our sport categories and find a workout that matches your goals.
                        </div>
                        <div className="col-5 offset-2 text-center start-right">
                            Create and track your own workout. The workout details will be saved to the calendar.
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 text-center">
                            <button className="btn golden main" onClick={showCatPage}>Choose Workout</button>
                        </div>
                        <div className="col-5 offset-2 text-center">
                            <button className="btn golden main" onClick={showNewProgramTracker}>Add Workout</button>
                        </div>
                    </div>
                </div>
               
            </div>
        </main>
    )
}

const mapStateToProps = ({ test, app }) => {
    // const { test, app } = store;
    // return { 
    //     myCustomNameForTEstStore: store.test,
    //     appReducer: store.app
    // };
    return { test, app };
};


export default withRouter(connect(mapStateToProps)(Home));
