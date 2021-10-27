import React from 'react'
import {ListOfCategories} from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyle'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => {
    return(
        <div>
            <GlobalStyle/>
            <Logo />
            <ListOfCategories />
            <ListOfPhotoCards />
        </div>    
    )
}