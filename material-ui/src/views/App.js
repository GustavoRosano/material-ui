import './App.css'
import React from 'react'

import Content from '../components/Content'
import Menu from '../components/Menu'

const App = props => (
    <div className="App">
        <Menu />
        <Content />
    </div>
)

export default App