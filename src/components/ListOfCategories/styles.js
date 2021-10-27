import styled, {keyframes, css} from 'styled-components'


const fadeInKeyframes = keyframes`
    from{
        filter: blur(5px);
        opacity:0;
    }
    to{
        filter: blur(0);
        opacity: 1;
    }
`
const fadeIn = ({time='1s', type='ease'} = {}) =>{
    return css`animation:  ${time} ${fadeInKeyframes} ${type};`
}

export const List = styled.ul`
    ${fadeIn}
    display: flex;
    overflow: scroll;
    padding: 1em 0;
    margin: 0;
    &::-webkit-scrollbar{
        opacity: 0;
    }
    ${props => props.fixed && css`
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0,0,0,0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(0.5);
        z-index:1;
    `}
`

export const Item = styled.li`
    padding: 0 8px;
`