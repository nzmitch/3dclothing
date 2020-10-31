import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import { breakpoints } from '../../utils/styles'

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
    @media (max-width: ${breakpoints.s}px) {
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

export const Title = styled.span`
    font-weight: 300;
    font-size: 2vmin;
    text-align: left;
    color: white;
    @media (max-width: ${breakpoints.s}px) {
        font-size: 1em;
    
    }
`

export const PriceTag = styled.span`
    font-weight: 300;
    font-size: 2vmin;
    text-align: left;
    margin-top: 15px;
    color: white;
    @media (max-width: ${breakpoints.s}px) {
        font-size: 1em;
    
    }
`


