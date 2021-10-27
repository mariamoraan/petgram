import React from 'react'
import { ImgWrapper, Img, Button } from './styles';
import { MdFavoriteBorder } from "react-icons/md";

export const PhotoCard = ({id, likes=0, src}) => {
    const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1515619363794-e826f7de3487?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
    return(
        <article>
            <a href={`/detail/${id}`}>
                <ImgWrapper>
                    <Img src={src ? src : DEFAULT_IMAGE} />
                </ImgWrapper>
            </a>
            <Button>
                <MdFavoriteBorder size='18px'/>
                {likes} likes !
            </Button>
        </article>
    )
}