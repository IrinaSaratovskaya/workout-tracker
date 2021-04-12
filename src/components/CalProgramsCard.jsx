import React, {useState} from 'react';
import CalProgramPopup from './CalProgramPopup';


const CalProgramsCard = (props) => {

    const { showCalProgTracker, program } = props;

    const { popup } = program;

    const [showPopup, setShowPopup] = useState(false);

    function openPopup() {
        setShowPopup(true)
    }
    function closePopup() {
        setShowPopup(false)
    }

    return (
        <>
        <div className="card border-0 cal-program text-center">
            <img src={program.img} className="card-img-top img-cal-type" alt="..."/>
            <div className="card-body">
                <h6 className="card-title program">{program.title}</h6>
                <p className="text-center cal-card-title">{program.description}</p>
                <ul className="text-left">
                    {program.contentList.map((item) => (
                        <li>{item}</li>    
                    ))}
                </ul>
                <div className="text-left card-level">
                    <span>Level: </span><span><i className={`orange ${program.level}`}></i></span>
                </div>
                <p className="text-right"><a className="link-orange" href="#" data-toggle="modal" data-target="#modal" onClick={openPopup}>Learn more</a></p>
                <button className="btn grey cal-program" onClick={showCalProgTracker}>Choose</button>
            </div>
        </div>
        {showPopup && (
                //Modal (popup)
                <CalProgramPopup
                    closePopup={closePopup}
                    programTitle={program.title}
                >
                    <div>
                        <h4 className="text-center cal-popup-name">{popup.title}</h4>
                        <h5 className="cal-popup-title"><span><i class="fas fa-caret-square-right"></i></span> Description</h5>
                        <p className="cal-popup-descr">{popup.desc}</p>
                    </div>
                    <div>
                        <h5 className="cal-popup-title ex"><span><i class="fas fa-caret-square-right"></i></span> Program content</h5>

                        {popup.exercises.map((exercise) => (
                            <div className="card cal-popup">
                                    <div className="row g-0">
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title cal">{exercise.name}</h5>
                                                <p className="card-text cal text-justify">Execution:</p>
                                                <ul>
                                                    {exercise.execution.map((ex) => (
                                                        <li>{ex}</li>
                                                    ))}
                                                </ul>
                                                <div className="row">
                                                    <div className="col-8">
                                                        <span><i class="far fa-hand-point-right"></i></span> Total: {exercise.sets} sets, {exercise.reps} reps
                                                    </div>
                                                    <div className="col-4 text-right">
                                                        <span><i class="far fa-clock"></i></span> Time: 7-10 min
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-4 text-center">
                                            <img className="img-fluid img-cal-popup" src={exercise.img} alt="..." />
                                        </div>
                                    </div>
                            </div>
                        ))}
                    </div>
                </CalProgramPopup>
            )}
        </>
    );
}

export default CalProgramsCard;