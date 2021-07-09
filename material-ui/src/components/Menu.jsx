import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside>
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                    <Link to="/input">Input</Link>
                    <Link to="/button">Button</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu