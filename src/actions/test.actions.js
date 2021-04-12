export const changeName = (name) => (dispatch, getState, axios) => {
    dispatch({ type: 'TEST:UPDATE_NAME', payload: name })
};
export const changeAge = (age) => (dispatch, getState, axios) => {
    dispatch({ type: 'TEST:UPDATE_AGE', payload: age })
};

export const changePerson = (name, age) => (dispatch, getState, axios) => {
    dispatch(changeName(name));
    dispatch(changeAge(age));
};