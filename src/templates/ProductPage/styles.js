import styled from '@emotion/styled'
import { breakpoints } from '../../utils/styles'
export const ProductTitle = styled.h1`
    font-size: 2.25rem;
    word-wrap: break-word;
    font-family: 'Roboto';
    font-weight: 400;
    margin: 0 0 0.5rem;

    color: white;
    position: relative;
`

export const ProductDescription = styled.div`
    margin-top: 0px;
    font-family: 'Roboto';
    font-weight: 100;
    color: white;
    position: relative;
`
export const Container = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
`

export const Grid = styled.div`
    display: grid;
    width: 60em;
    padding: 2em;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    @media (max-width: ${breakpoints.l}px) {
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
        gap: 0rem;
    
    }

`

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 5em;    
`