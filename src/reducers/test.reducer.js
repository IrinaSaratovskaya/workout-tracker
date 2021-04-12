const initialState = {
    name: 'Irina',
    age: 34
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'TEST:UPDATE_NAME': {
            return {
                ...state,
                name: action.payload
            }
        }
        case 'TEST:UPDATE_AGE': {
            return {
                ...state,
                age: action.payload
            }
        }
        default: {
            return state;
        }
    }
}