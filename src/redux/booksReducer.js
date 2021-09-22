const booksReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_BOOKS':
            console.log('Books reducer', action.books)
            return action.books
        default:
            return state
    }
}

export default booksReducer
