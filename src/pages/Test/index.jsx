import React from 'react';
import { connect } from 'react-redux';

import * as testActions from '../../actions/test.actions';

const TestPage = (props) => {
    const { testStore, changeName, changeAge, changePerson } = props;
    const onChangeNameClick = () => {
        // props.thisIsAReferenceToAnObjectPropertyThatIsAFunctionThatWillDispatchChangeName('Gabor');
        changeName('new name')
    }

    const onChangeAgeClick = () => {
        changeAge(35)
    }

    const onChangePersonClick = () => {
        changePerson('Bob', '52')
    }

    return (
        <>
            <div className="subtitle-orange">Name: {testStore.name}</div>
            <div className="subtitle-orange">Age: {testStore.age}</div>
            <button onClick={onChangeNameClick}>Change Name</button>
            <button onClick={onChangeAgeClick}>Change Age</button>
            <button onClick={onChangePersonClick}>Change Person</button>
        </>
    )
};

function mapDispatchToProps(dispatch) {
    return {
        // this key is going to be mapped to your props
        // thisIsAReferenceToAnObjectPropertyThatIsAFunctionThatWillDispatchChangeName: (name) => dispatch(changeName(name))
        // you could also do this:
        // changeName: (name) => dispatch({ type: 'TEST:UPDATE_NAME', payload: name }),
        changeName: (name) => dispatch(testActions.changeName(name)),
        changeAge: (age) => dispatch(testActions.changeAge(age)),
        changePerson: (name, age) => dispatch(testActions.changePerson(name, age)),
    }
}

// add te redux state to the component's props - choose which store you want to connect
const mapStateToProps = ({ testStore }) => {
    return { testStore };
};


export default connect(mapStateToProps, mapDispatchToProps)(TestPage);