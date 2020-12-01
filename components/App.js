import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AddPost from '../pages/AddPost'
import Feed from '../pages/Feed'
import Option from '../pages/Option'
import Header from './Header'

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Feed />
                </Route>
                <Route path="/add-post">
                    <AddPost />
                </Route>
                <Route path="/option">
                    <Option />
                </Route>
            </Switch>
        </div>
    )
}

export default App
