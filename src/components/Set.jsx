import React from 'react';

const Set = (props) => {
    const { set = {}, setIndex, exIndex, handleAddSet, repsChangeHandler, commentChangeHandler, handleDeleteSet } = props;

    return (
        <div data-test="set" className="sets-wrap">
            <div className="row">
                <div className="col-2">
                    <div className="grid-sets">
                        <span className="text-center">Set {setIndex+1}</span>
                        
                    </div>
                </div> 
                <div className="col-3">
                    <div>
                        <input
                            data-test="reps-input"
                            type="number"
                            min="0"
                            className="form-control add-input"
                            id="#"
                            placeholder="Add reps"
                            onChange={(event) => repsChangeHandler(event, exIndex, setIndex)}
                            value={set.reps}
                        />
                    </div>
                </div> 
                <div className="col-6">
                    <div>
                        <input 
                            data-test="comment-input"
                            type="text" 
                            className="form-control add-input" 
                            id="#" 
                            placeholder="Add comment" 
                            onChange={(event) => commentChangeHandler(event, exIndex, setIndex)}
                            value={set.comment}
                        />
                    </div>
                </div> 
                <div className="col-1">
                    <div className="delete-set">
                        <span onClick={() => handleDeleteSet(exIndex,setIndex)}><i class="far fa-times-circle"></i></span>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Set;