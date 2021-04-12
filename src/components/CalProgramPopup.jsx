import React from 'react';


const CalProgramPopup = (props) => {

    const { closePopup, programTitle } = props;

    return (
        <div className="page-wrapper d-flex justify-content-center">
            <div className="modal fade show cal d-block"> 
                <div className="modal-dialog-lg modal-dialog-centered">
                    <div className="modal-content cal text-left">
                        <div className="modal-header cal text-center">
                            <h4 className="modal-title cal w-100">{programTitle}</h4>
                            <button type="button" className="close" onClick={closePopup}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn golden" onClick={closePopup}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalProgramPopup;