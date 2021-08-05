import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/styles/style.css'
import '../../assets/styles/style_grid.css'
import './BookItem.css'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import Button from '@material-ui/core/Button'
// import { Card } from '@material-ui/core'

const BookItem = ({
    // id,
    name,
    description,
    category,
    image,
    onFilterButtonClick,
    // categoryClicked = '',
}) => {
    const history = useHistory()
    const location = useLocation()
    const categoryClick = (categoryClicked) => {
        // console.log('Category: ' + categoryClicked)
        if (onFilterButtonClick != undefined) {
            onFilterButtonClick(categoryClicked)
            if (location.pathname != '/categories') history.push('/categories')
        }
        // console.log(location)
    }

    let { id } = useParams()
    let idValue

    return (
        <div className="col-sm-4 col-xs-12">
            {/* <div>{id}</div> */}
            <div className="book-category">
                <div>Category:</div>
                <button
                    className="book-category-button"
                    // disabled={categoryClicked !== ''}
                    onClick={() => categoryClick(category)}
                >
                    {category}
                </button>
            </div>

            <Button
                onClick={() => {
                    idValue = 0
                    history.push('/book/0')
                }}
            >
                <div className="book-frame">
                    <img src={image} alt="The book" />
                    <div className="book-name-title">{name}</div>
                    <div className="description">{description}</div>
                </div>
            </Button>
        </div>
    )
}

BookItem.propTypes = {
    // id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    onFilterButtonClick: PropTypes.func,
    // categoryClicked: PropTypes.string,
}

export default BookItem
