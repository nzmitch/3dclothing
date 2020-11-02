import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const breakpoints = {
    s: 576,
    m: 768,
    l: 992,
    xl: 1200,
}

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 3em;
    background-color: #c0c0c0;
    display: flex;
`

export const Cartcontainer = styled.div`
    width: 8em;
    height: 2.3em;
    border-top: solid white 1px;
    border-left: solid white 1px;
    border-bottom: solid black 1px;
    border-right: solid black 1px;
    margin-top: 0.3em;
    margin-left: 0.3em;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const Cartcontainer1 = styled.div`
    width: 6em;
    height: 2.3em;
    border-top: solid white 1px;
    border-left: solid white 1px;
    border-bottom: solid black 1px;
    border-right: solid black 1px;
    margin-top: 0.3em;
    margin-left: 0.3em;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const Cartcontainer2 = styled.div`
    width: 2.3em;
    height: 2.3em;
    border-top: solid white 1px;
    border-left: solid white 1px;
    border-bottom: solid black 1px;
    border-right: solid black 1px;
    margin-top: 0.3em;
    margin-left: 0.3em;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MenuLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 1.1em;
    display: inline-block;
    height: 100%;
    width: 100%;
     display: flex;
    justify-content: center;
    align-items: center;
`
