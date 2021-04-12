
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PageTop from '../../components/PageTop';
import CalProgramsCard from '../../components/CalProgramsCard';
// import { calisthenicsPrograms } from '../calisthenicsPrograms';
import CalProgramPopup from '../../components/CalProgramPopup';

import { css } from "@emotion/core";
import SyncLoader from "react-spinners/SyncLoader";


const CalPrograms = (props) => {  
    

    const [calisthenicsPrograms, setCalisthenicsPrograms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState('#F15A24');

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:3030/cal-programs')
            .then(res=> res.json())
            .then(
                (result) => {
                    setCalisthenicsPrograms(result);
                    setLoading(false)
                }
            )
    }, [])
    
    function showCalProgTracker() {
        props.history.push('/calisthenics-program-tracker')
    }

    
    // removed from main class page-wrapper d-flex justify-content-center
    return (   
        <main className="">
            <PageTop 
                pageDescription="Workout Tracker provides various calisthenics programs. Photos and instructions accompany each exercise so you can make sure your form is correct."
            >
                <span className="subtitle-orange">CALISTHENICS</span> PROGRAMS
            </PageTop>
          
            <div className="container-fluid cal-top-banner">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4 className="orange">About Calisthenics</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 col-xl-7">
                            <p>Calisthenics are exercises that don’t rely on anything but a person’s own body weight. These exercises are performed with differing levels of intensity and rhythm. Sometimes these exercises are done with light handheld tools like rings and wands.</p>
                            <h6>Calisthenics helps to develop:</h6>
                            <ul className="list-unstyled">
                                <li className="cal-benefits-li"><span className="orange cal-benefits"><i class="fas fa-check"></i></span> Strength</li>
                                <li className="cal-benefits-li"><span className="orange cal-benefits"><i class="fas fa-check"></i></span> Endurance</li>
                                <li className="cal-benefits-li"><span className="orange cal-benefits"><i class="fas fa-check"></i></span> Flexibility</li>
                                <li className="cal-benefits-li"><span className="orange cal-benefits"><i class="fas fa-check"></i></span> Coordination</li>
                            </ul>
                        </div>
                        <div className="col-4 col-xl-4 offset-xl-1">
                            <div className="card cal-levels">
                                <p>The workouts are divided into three categories - easy, medium and hard, so that you can choose the right level.</p>
                                <ul className="list-unstyled">
                                    <li className="cal-level-li"><span className="orange cal-level"><i className="fas fa-battery-quarter"></i></span> easy</li>
                                    <li className="cal-level-li"><span className="orange cal-level"><i className="fas fa-battery-half"></i></span> medium</li>
                                    <li className="cal-level-li"><span className="orange cal-level"><i className="fas fa-battery-full"></i></span> hard</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid cal-prog-banner">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="cal-prog-title text-center">Top 3 <span className="title-grey">Calisthenics Programs</span></h2>
                        </div>
                    </div>
                    {loading === true ?

                        <div className="row loading-row text-center">
                            <div className="col-12 loading-col">
                                <SyncLoader color={color} size={20} />
                            </div>
                            <div className="col-12 loading-col">
                                <h3>Loading programs...</h3>
                            </div>
                        </div>
                        :
                        <div className="row text-center cal-cards-row">
                                {calisthenicsPrograms.map((program) => (
                                    <div className="col-4">
                                        <CalProgramsCard 
                                            showCalProgTracker={showCalProgTracker}
                                            program={program}
                                        />
                                    </div>
                                ))}
                        </div>
                    }
                    <div className="row show-more">
                        <div className="col">
                            <p className="text-center">Show more </p>
                            <div className="text-center">
                                <span><i className="fas fa-chevron-circle-down"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default withRouter(CalPrograms);
