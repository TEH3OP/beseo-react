import React from 'react'
import PropTypes from 'prop-types'
import BooksList from '../../components/Books/BooksList'

const CategoriesPage = ({ selectedCategory }) => {
    // console.log('CategoriesPage selected:' + selectedCategory)
    return (
        <>
            <BooksList selectedCategory={selectedCategory} />
        </>
    )
}

CategoriesPage.propTypes = {
    selectedCategory: PropTypes.string,
}

export default CategoriesPage
