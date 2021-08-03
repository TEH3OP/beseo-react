import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/styles/style.css'
import '../../assets/styles/style_grid.css'
import './BookItem.css'
import { useHistory } from 'react-router-dom'

const BookItem = ({
    id,
    name,
    description,
    category,
    image,
    onFilterButtonClick,
    categoryClicked = '',
}) => {
    const history = useHistory()
    const categoryClick = (categoryClicked) => {
        if (categoryClicked !== '') {
            console.log('Category: ' + categoryClicked)
            onFilterButtonClick(categoryClicked)
        }
        history.push('/categories')
    }

    return (
        <div className="col-sm-4 col-xs-12">
            <div>{id}</div>
            <div className="book-category">
                <div>Category:</div>
                <button
                    className="book-category-button"
                    disabled={categoryClicked !== ''}
                    onClick={() => categoryClick(category)}
                >
                    {category}
                </button>
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
    onFilterButtonClick: PropTypes.func,
    categoryClicked: PropTypes.string,
}

export default BookItem
