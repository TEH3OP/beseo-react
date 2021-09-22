const booksLikeReducer = (state = { 1: true, 2: true }, action) => {
    switch (action.type) {
        // case 'LIKE':
        //     return {
        //         ...state,
        //         [action.id]: true,
        //     }
        // case 'DISLIKE':
        //     return {
        //         ...state,
        //         [action.id]: false,
        //     }
        case 'TOGGLE_LIKE':
            return {
                ...state,
                [action.id]: !state[action.id],
            }

        default:
            return state
    }
}

export default booksLikeReducer
