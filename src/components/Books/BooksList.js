import React from 'react'
// import PropTypes from 'prop-types'
import BookItem from './BookItem'
import bookArray from './booksArray'
import '../../styles/style.css'
import '../../styles/style_grid.css'
import './BookItem.css'

const BooksList = () => {
    return (
        <>
            <div className="books-background">
                <div className="container">
                    <div className="books-title">Books list</div>
                    <div className="row">
                        {bookArray.map(
                            ({ id, name, description, category, image }) => {
                                {
                                    return (
                                        <BookItem
                                            id={id}
                                            name={name}
                                            description={description}
                                            category={category}
                                            image={image}
                                        />
                                    )
                                }
                            }
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

// BooksList.propTypes = {
//     addProductToCart: PropTypes.func,
// }

export default BooksList
