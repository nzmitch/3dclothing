import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly; 
  text-align: center;

 
`

export const Button = css`
    -webkit-appearance:none;
    opacity: 1;
    margin-left: 0.3em;
    background-color: #c0c0c0;
    border-top: 1px solid #fcfcfc;
    border-left: 1px solid #fcfcfc;
    border-bottom: 1.1px solid #2c2c2c;
    border-right: 1.1px solid #2c2c2c;

`