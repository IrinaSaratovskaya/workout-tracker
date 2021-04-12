const initialState = {
    error: null,
    loading: false,
    loaded: false,
    staticData: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}