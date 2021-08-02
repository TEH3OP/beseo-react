import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/style.css'
import '../../styles/style_grid.css'
import './BookItem.css'

const BookItem = ({ id, name, description, category, image }) => {
    return (
        <div className="col-sm-4 col-xs-12">
            <div>{id}</div>
            <div className="book-category">
                <div>Category:</div>
                <button className="book-category-button">{category}</button>
            </div>

            <div className="book-frame">
                <img src={image} alt="The book" />
                <div className="book-name-title">{name}</div>
                <div className="description">{description}</div>
            </div>
        </div>
    )
}

BookItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
}

export default BookItem
