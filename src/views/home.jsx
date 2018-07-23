import React from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'

import logo from '@/assets/logo.svg'

@inject('appStore')
@observer
class Home extends React.Component {
    componentWillMount() {
        const { appStore } = this.props
        setTimeout(() => {
            appStore.setUserName('React')
        }, 500)
    }

    render() {
        const { appStore } = this.props
        return (
            <div>
                <img src={logo} width="100" height="100" alt="" />
                <h1>hello, {appStore.userName}</h1>
                <Link to="/about">about</Link>
            </div>
        )
    }
}

export default Home
