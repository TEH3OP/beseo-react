import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import BookItem from './BookItem'
// import bookArray from './booksArray'
import '../../assets/styles/style.css'
import '../../assets/styles/style_grid.css'
import './BookItem.css'
import { connect } from 'react-redux'

const BooksList = ({
    onFilterButtonClick,
    selectedCategory = '',
    receiveArray,
}) => {
    // console.log(selectedCategory)

    // const bookFiteredArray =
    // const [isLiked, toggleLiked] = useState({ 2: true })

    // const clickLike = (id) => {
    //     toggleLiked({ ...isLiked, [id]: !isLiked[id] })
    // }
    const [booksArray, setBooksArray] = useState([])

    useEffect(() => {
        console.log('Send request')
        axios
            .get('https://run.mocky.io/v3/87745a7a-da3d-4bbe-8a8f-8ab45ce123da')
            .then((res) => {
                console.log('Data received', res)
                return res.data
            })
            .then((data) => {
                setBooksArray(data.booksArray)
                receiveArray(data.booksArray)
            })
    }, [])

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
                        {booksArray.length == 0 ? (
                            <div>Loading...</div>
                        ) : (
                            booksArray
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
                                        console.log('id', id)
                                        return (
                                            <BookItem
                                                key={id}
                                                id={id}
                                                name={name}
                                                description={description}
                                                category={category}
                                                image={image}
                                                onFilterButtonClick={
                                                    onFilterButtonClick
                                                }
                                                // isLiked={isLiked[id]}
                                                // clickLike={clickLike}
                                            />
                                        )
                                    }
                                )
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
    isLiked: PropTypes.bool,
    receiveArray: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
    receiveArray: (books) => dispatch({ type: 'GET_BOOKS', books }),
})

export default connect(null, mapDispatchToProps)(BooksList)
