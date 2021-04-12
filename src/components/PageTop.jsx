import React from 'react';

const PageTop = (props) => {

    const { pageDescription } = props;

    return (
        <div className="container-fluid main-top">
            <div className="container">
                <div className="row d-flex align-self-start">
                    <div className="col">
                        <header className="page-title main text-center">
                            {props.children}
                        </header>
                        <p className="main-subtitle text-center">{pageDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageTop;