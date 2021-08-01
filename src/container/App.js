import React from 'react'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
import Header from './Header/Header'
import Main from './Main/Main'

const App = () => {
    return (
        <ScopedCssBaseline>
            <Header />
            <Main />
        </ScopedCssBaseline>
    )
}

export default App
