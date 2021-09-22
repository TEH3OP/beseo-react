import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import BookItemFull from '../../components/Books/BookItemFull'
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
            <Route path="/book/:bookId" component={BookItemFull} />
        </Switch>
    )
}

export default Main
