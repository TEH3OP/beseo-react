/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import BookItem from '../../components/Books/BookItem'
import booksArray from '../../components/Books/booksArray'
import CategoriesPage from '../../pages/CategoriesPage/CategoriesPage'
import HomePage from '../../pages/HomePage/HomePage'

const Main = () => {
    const [selectedCategory, setCategory] = useState('')

    const onFilterButtonClick = (clickedCategory) => {
        setCategory(clickedCategory)
        // console.log('Main clicked:' + clickedCategory)
    }

    return (
        <Switch>
            <Route path="/" exact>
                <HomePage onFilterButtonClick={onFilterButtonClick} />
            </Route>
            <Route path="/categories">
                <CategoriesPage
                    selectedCategory={selectedCategory}
                    onFilterButtonClick={onFilterButtonClick}
                />
            </Route>
            <Route path="/book/:id">
                <BookItem {...booksArray[0]} />
            </Route>
        </Switch>
    )
}

export default Main
