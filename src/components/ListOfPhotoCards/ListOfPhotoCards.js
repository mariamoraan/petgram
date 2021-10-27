import React from 'react'
import { PhotoCard } from '../PhotoCard';
import {List, Item} from "./styles";

export const ListOfPhotoCards = () =>{
    return(
        <List>
           {[1,2,3,4].map(e => <Item key={e}><PhotoCard /></Item>)}
        </List>
       
    )
}   