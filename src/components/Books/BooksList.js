import React from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'
import bookArray from './booksArray'
import '../../assets/styles/style.css'
import '../../assets/styles/style_grid.css'
import './BookItem.css'

const BooksList = ({ onFilterButtonClick, selectedCategory = '' }) => {
    console.log(selectedCategory)

    const bookFiteredArray = bookArray.filter(({ category }) => {
        return category === selectedCategory || selectedCategory === ''
    })

    console.log(bookFiteredArray)

    // console.log('BookList selected:' + selectedCategory)

    return (
        <>
            <div className="books-background">
                <div className="container">
                    <div className="books-title">
                        {selectedCategory == ''
                            ? 'Books list'
                            : 'Selected books category: ' +
                              selectedCategory +
                              '. Click Home to return'}
                    </div>
                    <div className="row">
                        {bookFiteredArray.map(
                            ({ id, name, description, category, image }) => {
                                {
                                    return (
                                        <BookItem
                                            key={id}
                                            // id={id}
                                            name={name}
                                            description={description}
                                            category={category}
                                            image={image}
                                            onFilterButtonClick={
                                                onFilterButtonClick
                                            }
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

BooksList.propTypes = {
    onFilterButtonClick: PropTypes.func,
    selectedCategory: PropTypes.string,
}

export default BooksList