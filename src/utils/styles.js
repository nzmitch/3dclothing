import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { Global, css,  keyframes } from "@emotion/core"


export const breakpoints = {
  xs: 400,
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}



export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      body {
        margin: 0;
        background: white;
        overflow-x: hidden;
        box-sizing: border-box;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
         -webkit-appearance: none;
      }
      html {
        @font-face {
     
        }
         -webkit-appearance: none;
         font-family: Roboto;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
    `}
  />
)


export const Img = styled(Image)`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
`

export const MainContent = styled.main`
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.l}px){
    margin-top: 40px;
    margin-bottom: 20px;
  }
`