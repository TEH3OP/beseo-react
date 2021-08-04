import React from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'
import bookArray from './booksArray'
import '../../assets/styles/style.css'
import '../../assets/styles/style_grid.css'
import './BookItem.css'

const BooksList = ({ onFilterButtonClick, selectedCategory = '' }) => {
    // console.log(selectedCategory)

    // const bookFiteredArray =

    return (
        <>
            <div className="books-background">
                <div className="container">
                    <div className="books-title">
                        {selectedCategory == ''
                            ? 'Web programming books'
                            : 'Selected books category: ' +
                              selectedCategory +
                              '. Click Home to return'}
                    </div>
                    <div className="row">
                        {bookArray
                            .filter(
                                ({ category }) =>
                                    category === selectedCategory ||
                                    selectedCategory === ''
                            )
                            .map(
                                ({
                                    id,
                                    name,
                                    description,
                                    category,
                                    image,
                                }) => {
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
