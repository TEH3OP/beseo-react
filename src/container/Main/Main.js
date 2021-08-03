import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import CategoriesPage from '../../pages/CategoriesPage/CategoriesPage'
import HomePage from '../../pages/HomePage/HomePage'

const Main = () => {
    const [selectedCategory, setCategory] = useState('')

    const onFilterButtonClick = (clickedCategory) => {
        setCategory(clickedCategory)
        console.log('Main clicked:' + clickedCategory)
    }

    // console.log('Main selected:' + selectedCategory)

    return (
        <Switch>
            <Route path="/" exact>
                <HomePage onFilterButtonClick={onFilterButtonClick} />
            </Route>
            <Route path="/categories">
                <CategoriesPage selectedCategory={selectedCategory} />
            </Route>
        </Switch>
    )
}

export default Main
