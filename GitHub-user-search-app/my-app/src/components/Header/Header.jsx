import React from 'react'
import { ThemeContext, themes } from '../../contexts/theme-context';

import './Header.css'

export const Header = () => {

    return (


        <header className='header'>
            <span className='logo'>devfinder</span>
            <ThemeContext.Consumer>
                {value => {
                    return <label className='switch'>
                        <input type="checkbox" onClick={() => value.changeTheme()} />
                        <span className='slider round' />
                    </label>
                }
                }
            </ThemeContext.Consumer>


        </header>
    )
}

