import React from 'react'
import Container from '@material-ui/core/Container'
import { useParams } from 'react-router-dom'
import booksArray, { getBooksObj } from './booksArray'

const BookItemFull = () => {
    const { bookId } = useParams()
    const books = getBooksObj(booksArray)

    return (
        <Container
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '320px',
            }}
        >
            <h1>Book id: {bookId}</h1>
            <div className="book-category">
                <h2>Category:{books[bookId].category}</h2>
            </div>

            <div>
                <img src={books[bookId].image} alt="The book" />
                <div className="book-name-title">{books[bookId].name}</div>
                <div className="description">{books[bookId].description}</div>
            </div>
        </Container>
    )
}

export default BookItemFull
