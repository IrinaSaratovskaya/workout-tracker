import React from 'react';



const CategoryCard = (props) => {

    const { card, showCalProg } = props;

    return (
        <div className="card card-category">
            <div className="row g-0">
                {card.left === true && (
                    <div className="col-md-4">
                        <img className="img-fluid img-category-left" src={card.img} alt="..." />
                    </div>
                )}
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title category">{card.title}</h5>
                        <hr className="title-underline"/>
                        <p className="card-text text-justify">{card.text}</p>
                        <button className="btn grey cat" onClick={showCalProg}>Choose</button>
                    </div>
                </div>
                {card.left === false && (
                    <div className="col-md-4">
                        <img className="img-fluid img-category-right" src={card.img} alt="..." />
                    </div>
                )}
            </div>
        </div>
    );
}

export default CategoryCard;