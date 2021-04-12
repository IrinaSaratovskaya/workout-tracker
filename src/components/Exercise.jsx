import React, {useEffect, useState} from 'react';
import Set from './Set';

// const [loading, setLoading] = useState(false);
// const [calisthenicsProgramPopups, setCalisthenicsProgramPopups] = useState([]);

// useEffect(() => {
//     // setLoading(true)
//     fetch('http://localhost:3030/cal-programs')
//         .then(res=> res.json())
//         .then(
//             (result) => {
//                 setCalisthenicsProgramPopups(result);
//                 // setLoading(false)
//             }
//         )
// }, [])

// const popups = calisthenicsProgramPopups.popup;

const Exercise = (props) => {

    const { ex={sets: []}, i, nameChangeHandler, handleAddSet, repsChangeHandler, commentChangeHandler, handleDeleteSet, handleDelete } = props;
    return (
        <div data-test="exercise" className="row table-row-wrapper mb-3 text-center">
            <div className="col-1">
                <div className="tracker-number d-flex align-items-center justify-content-center">{i+1}</div>
            </div>
            <div className="col-3">
                <div className="grid-exercise">
                    <input type="text" className="form-control add-input" id="#" placeholder="Exercise name" value={ex.name} onChange={(event) => nameChangeHandler(event, i)}/>
                </div>
            </div>
            <div className="col-7">
                {ex.sets.map((set, j) => (
                    <Set 
                        set={set}
                        setIndex={j}
                        exIndex={i}
                        handleAddSet={handleAddSet}
                        repsChangeHandler={repsChangeHandler}
                        commentChangeHandler={commentChangeHandler}
                        handleDeleteSet={handleDeleteSet}
                        // popups = {popups}
                    />
                ))}
                <div className="add-set"><a data-test="add-set" href="#" onClick={() => handleAddSet(i)}>Add set</a></div>
            </div>
            <div className="col-1 d-flex justify-content-end">
                <div className="delete-ex" onClick={() => handleDelete(i)}><i class="fas fa-times"></i></div>
            </div>
        </div>
    );
}

export default Exercise;