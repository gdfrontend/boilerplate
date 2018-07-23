import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'
import AppStore from '@/store'

import Home from '@/views/home'
import About from '@/views/about'

const App = () => (
    <Provider appStore={AppStore}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </Router>
    </Provider>
)

export default App
