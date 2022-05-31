import React from 'react'
import { ThemeContext } from '../../contexts/theme-context';

import './Header.css'

export const Header = () => {

    return (
        <header className='header'>
            <span className='logo'>devfinder</span>
            <ThemeContext.Consumer>
                {props => {
                    return <label className='switch'>
                        <input type="checkbox" onClick={() => props.changeTheme()} />
                        <span className='slider round' />
                    </label>}
                }
            </ThemeContext.Consumer>


        </header>
    )
}

