const initialState = {
    name: 'Аноним'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'rename':
            return {
                ...state,
                name: action.text
            };
        default: return state;
    }
}

export default profileReducer;