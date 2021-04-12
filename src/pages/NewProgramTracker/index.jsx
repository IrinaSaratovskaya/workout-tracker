import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Exercise from '../../components/Exercise';
import PageTop from '../../components/PageTop';

const NewProgramTracker = (props) => {   

    const [popupSaveProgram, setPopupSaveProgram] = useState(false);
    const [exercises, setExercises] = useState([
        {name: '', sets: [{reps: 0, comment: ''}]},
        {name: '', sets: [{reps: 0, comment: ''}]},
        {name: '', sets: [{reps: 0, comment: ''}]}
    ]);

    function openMainPage() {
        props.history.push('/')
    } 

    function openPopupSaveProgram() {
        setPopupSaveProgram(true);
    }
    function handleSaveClick() {
        console.log('save', exercises);
        openPopupSaveProgram();
    }


    function closePopupSaveProgram() {
        setPopupSaveProgram(false);
    } 
    
    function handleGoToMainClick() {
        setPopupSaveProgram(false);
        props.history.push('/')
    }

    function handleAddExercise() {
        setExercises([ ...exercises, { sets: [{reps: 0, comment: ''}] } ]);
    }

    function handleAddSet(i) {
        const newSetArray = [...exercises]; 
        newSetArray[i].sets.push({reps: 0, comment: ''});    // first, specify the row we need (by choosing its index), then choose sets, as it's our final target
    }

    function handleDelete(i) {           // pass index to know which line to delete
        console.log('handleDelete', i);
        const newDelArray = [...exercises];
        newDelArray.splice(i, 1);
        setExercises(newDelArray);
    }
    
    function handleDeleteSet(i, j) {           
        const newDelArray = [...exercises];
        newDelArray[i].sets.splice(j, 1);
        setExercises(newDelArray);
    }

    function nameChangeHandler(event, i) {
        const newNameArray = [...exercises];
        newNameArray[i].name = event.target.value;
        setExercises(newNameArray);
    }

    function repsChangeHandler(event, i, j) {
        const newRepsArray = [...exercises];
        newRepsArray[i].sets[j].reps = event.target.value;
        setExercises(newRepsArray);
    }
    function commentChangeHandler(event, i, j) {
        const newCommentArray = [...exercises];
        newCommentArray[i].sets[j].comment = event.target.value;
        setExercises(newCommentArray);
    }


    console.log(exercises);

    return (
        <main className="page-wrapper d-flex justify-content-center">
            <PageTop 
                pageDescription="Tracking your workouts can be the perfect way to encourage you to keep on keepin’ on. With a simple interface, Workout Tracker lets you track and log all the details of your workouts."
            > 
               Add a <span className="subtitle-orange">new workout</span>
            </PageTop>
            <div className="container-fluid new-tracker">
                <form className="container date-form">
                    <div className="form-group row tracker-date-form">
                        <label for="inputDate" className="col-1 col-form-label font-weight-bold">Date</label>
                        <div className="col-3">
                            <input type="date" className="form-control tracker-date-input" id="inputPassword" />
                        </div>
                    </div>
                </form>

                {/* Table row/col */}
                <div className="container tracker-table">
                    <div className="row mb-3 text-center table-head">
                        <div className="col-1">
                            <div className="number-header text-left">No.</div>
                        </div>
                        <div className="col-3">
                            <div className="exercise-header">Exercise</div>
                        </div>
                        <div className="col-7">
                            <div className="row">
                                <div className="col-2">
                                    <div className="sets-header text-right">Sets</div>
                                </div>
                                <div className="col-3">
                                    <div className="reps-header">Reps</div>
                                </div>
                                <div className="col-6">
                                    <div className="comment-header">Add Comment</div>
                                </div>
                                <div className="col-1">
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="delete-ex-header text-left">Delete</div>    
                        </div>
                    </div>
                    {exercises.map((ex, i) => (
                        <Exercise 
                            ex={ex}
                            i={i}
                            nameChangeHandler={nameChangeHandler} 
                            handleAddSet={handleAddSet} 
                            repsChangeHandler={repsChangeHandler}
                            commentChangeHandler={commentChangeHandler}
                            handleDeleteSet={handleDeleteSet}
                            handleDelete={handleDelete}
                        />
                    ))}
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-3 add-new-ex"><a href="#" onClick={handleAddExercise}>Add exercise</a></div>
                    </div>
                    <div className="row">
                        <div className="col-4 offset-8 text-right">
                            <button type="button" class="btn btn-tracker golden btn-info" onClick={handleSaveClick}>Save</button>
                            <button type="button" class="btn btn-tracker dark-grey btn-secondary" onClick={openMainPage}>Delete</button>
                        </div>
                    </div>

                </div>
            </div>                               
            {popupSaveProgram === true && (
                //Modal (popup)
                <div className="page-wrapper d-flex justify-content-center">
                    <div className="modal fade show d-block">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" onClick={closePopupSaveProgram}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    
                                </div>
                                <div className="modal-body text-center">
                                    <div><i className="fas fa-calendar-check"></i></div>
                                    <p className="popup-saved-text">Your workout has been successfully added to the Calendar.</p>
                                    <br/>
                                    <br/>
                                    <a className="pd10 link-orange" href="#" onClick={handleGoToMainClick}>Go to Main page</a>
                                    <a className="pd10 link-orange" href="#">Go to Calendar</a>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn dark-grey" onClick={closePopupSaveProgram}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}


export default withRouter(NewProgramTracker);