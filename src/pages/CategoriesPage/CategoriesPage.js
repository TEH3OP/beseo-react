import React from 'react'
import PropTypes from 'prop-types'
import BooksList from '../../components/Books/BooksList'

const CategoriesPage = ({ selectedCategory, onFilterButtonClick }) => {
    // console.log('CategoriesPage selected:' + selectedCategory)
    return (
        <>
            <BooksList
                selectedCategory={selectedCategory}
                onFilterButtonClick={onFilterButtonClick}
            />
        </>
    )
}

CategoriesPage.propTypes = {
    selectedCategory: PropTypes.string,
    onFilterButtonClick: PropTypes.func,
}

export default CategoriesPage
