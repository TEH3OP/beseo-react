import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/styles/style.css'
import '../../assets/styles/style_grid.css'
import './BookItem.css'
import { useHistory, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
// import { Card } from '@material-ui/core'

const BookItem = ({
    id,
    name,
    description,
    category,
    image,
    onFilterButtonClick,
    isLiked = false,
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

    // let { id } = useParams()

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

            <div className="book-frame">
                <div className="book-frame-img">
                    <img src={image} alt="The book" />
                    <div className="book-frame-favorite">
                        <Button variant="outlined">
                            {isLiked ? (
                                <FavoriteIcon />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </Button>
                    </div>
                </div>
                <Link
                    to={`/book/${id}`}
                    style={
                        ({ display: 'block' },
                        // { cursor: 'pointer' },
                        { textDecoration: 'none' })
                    }
                >
                    <div className="book-name-title">{name}</div>
                    <div className="description">{description}</div>
                </Link>
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
    isLiked: PropTypes.bool,
    // categoryClicked: PropTypes.string,
}

export default BookItem
