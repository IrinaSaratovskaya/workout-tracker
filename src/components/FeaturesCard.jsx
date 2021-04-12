import React from 'react';


const FeaturesCard = (props) => {

    const { card = {} } = props;

    return (
        <div className="col-3 text-center" data-test="features-card">
            <div className="card card-features text-center">
                <div className="d-flex justify-content-center">
                    <span className="icon-features d-flex align-items-center justify-content-center">
                        <i data-test="features-card-icon" className={card.icon}></i> 
                    </span>
                </div>
                <div className="card-body features">
                    <h5 className="card-title" data-test="features-card-title">{card.title}</h5>
                    <p className="text-features text-justify" data-test="features-card-description">{card.description}</p>
                </div>
            </div>
        </div>
    );
}

export default FeaturesCard;