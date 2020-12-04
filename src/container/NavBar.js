import React from 'react'
import { Links } from '../components/Links'
import { Logo } from '../components/Logo'

export const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Logo />
                <Links />
            </nav>
        </div>
    )

}

