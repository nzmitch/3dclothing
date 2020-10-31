import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const breakpoints = {
    s: 576,
    m: 768,
    l: 992,
    xl: 1200,
}

export const Wrapper = styled.div`
    width: 100%;
`

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3em;
    background-color: #c0c0c0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
`

export const Cartcontainer = styled(Link)`
    display: inline-block;
    vertical-align: middle;
    background-color: #c0c0c0;
    border-top: 1px solid #fcfcfc;
    border-left: 1px solid #fcfcfc;
    border-bottom: 1.1px solid #2c2c2c;
    border-right: 1.1px solid #2c2c2c;
    width: 8em;
    height: 2.4em;
    margin-left: 0.3em;
    margin-top: 0.3em;
    position: relative;
`


export const Cartcontainer2 = styled(Link)`
    display: inline-block;
    vertical-align: middle;
    background-color: #c0c0c0;
    border-top: 1px solid #fcfcfc;
    border-left: 1px solid #fcfcfc;
    border-bottom: 1.1px solid #2c2c2c;
    border-right: 1.1px solid #2c2c2c;
    width: 2.4em;
    height: 2.4em;
    margin-left: 0.3em;
    margin-right: 0.3em;
    margin-top: 0.3em;
    position: relative;

`



export const CartLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    line-height: 0.4em; 
  
   
    
`

export const CartCounter = styled.span`
    vertical-align: middle;
    font-weight: 400;
    color: black;
    position: relative;
    font-size: 1.15em;
    cursor: pointer;
    
`


