import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import CategoryCard from '../../components/CategoryCard';
import PageTop from '../../components/PageTop';
import SyncLoader from "react-spinners/SyncLoader";

const Category = (props) => {
    
    const [categoryCards, setCategoryCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState('#F15A24');

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:3030/category-cards')
            .then(res=> res.json())
            .then(
                (result) => {
                    setCategoryCards(result);
                    setLoading(false);
                }
            )
    }, [])

    function showCalProg() {
        props.history.push('/calisthenics-programs')
    }
    

    return (
        <main>
            <PageTop 
                pageDescription="It doesn't matter whether you're an experienced athlete or just beginning your fitness journey, there are programs suitable for your level. Our workout library covers gym, home, and outdoor exercises."
            >   
                CHOOSE <span className="subtitle-orange">CATEGORY</span>
                <div></div>
            </PageTop>
            
            <div className="container-fluid category-banner p-0">
                {loading === true?
                <div className="row loading-row text-center">
                    <div className="col-12 loading-col">
                        <SyncLoader color={color} size={20} />
                    </div>
                    <div className="col-12 loading-col">
                        <h3>Loading categories...</h3>
                    </div>
                </div>
                :
                <div className="container container-category">
                    {categoryCards.map((card) => (
                        <CategoryCard
                            card={card} 
                            showCalProg={showCalProg}
                        />
                    ))}   
                </div>
                }
            </div>
        </main>
    )
}


export default withRouter(Category);