import styled from '@emotion/styled'
import {
    Link
} from 'gatsby'
import {
    css
} from "@emotion/core"

export const Cartcontainer = styled.div `
  display: flex;
  padding: 2em;
  right: 0;
  position: absolute
`

export const Line = styled.div `
  height: 20px;
  background: #efefef;
  width: 4px;
  margin-right: 0.7rem;
  margin-left: 0.7rem;
`

export const Wrapper = styled.div `
    top: 0;
    width: 100%;
`
export const Container = styled.div `
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 100%;
  text-align: right;
  display: flex;
 border-bottom: 1px solid black;
`
export const MenuLink = styled(Link)
`
  color: black;
  text-decoration: none;
  font-size: 14px;
  display: inline-block;
`

export const CartLink = styled(Link)
`
  color: black;
  text-decoration: none;
  font-size: 14px;
  display: inline-block;
`

export const CartCounter = styled.span `
  background-color: transparent;
  color: black;

 font-size: 14px;
float: right;
  z-index: 20;
  display: inline-block;
`

export const NavTitle = styled.h1 `
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: 5px;
  font-weight: normal;
  text-decoration: none;
  color: black;
  padding: 0  0 0;
  margin: 0px
`
