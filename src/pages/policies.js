import React from 'react'
import { graphql } from 'gatsby'

import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}


export const textContainer = css`
    margin-left: auto;
    margin-right: auto;
    width: 95%;
`

export const Wrapper = styled.div`
    width: 100%;
    padding-bottom: 10em;

`
const IndexPage = ({ data }) => (
  <Wrapper>
    <div css={textContainer}>
      {data.allShopifyPage.edges.map(({ node }) => (
        <h2>{node.body.slice(0,14)}</h2>
      ))}
    </div>
    
    <div css={textContainer}>
      {data.allShopifyPage.edges.map(({ node }) => (
        <p>{node.body.slice(14,179)}</p>
      ))}
    </div>
    
    <div css={textContainer}>
      {data.allShopifyPage.edges.map(({ node }) => (
        <h2>{node.body.slice(179,196)}</h2>
      ))}
    </div>
    
    <div css={textContainer}>
      {data.allShopifyPage.edges.map(({ node }) => (
        <p>{node.body.slice(196,573)}</p>
      ))}
    </div>
    
    <div css={textContainer}>
      {data.allShopifyPage.edges.map(({ node }) => (
        <h2>{node.body.slice(573,589)}</h2>
      ))}
    </div>
    
    <div css={textContainer}>
      {data.allShopifyPage.edges.map(({ node }) => (
        <p>{node.body.slice(196,573)}</p>
      ))}
    </div>
   
  </Wrapper>
)

export const query = graphql`
query PolicyQuery {
  allShopifyPage(filter: {id: {glob: "Shopify__Page__Z2lkOi8vc2hvcGlmeS9QYWdlLzUyMjIwMjMxNzU0"}}) {
    edges {
      node {
        body
        id
      }
    }
  }
}
`

export default IndexPage
