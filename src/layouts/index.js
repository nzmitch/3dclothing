import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'


import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navbar from '~/components/Navigation'
import App from '~/components/Computer'
import Footer from '~/components/Footer'
import About from '~/components/About'
import Services from '~/components/Services'
import ProductGrid from '~/components/ProductGrid'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 100%;
`

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <video style={{position: 'fixed', right: '0', top: '0', minwidth: '100%', minHeight: '100%', transform: 'translateX(calc((100% - 100vw) / 2))'}} autoPlay muted loop >
            <source src="https://cdn.glitch.com/c995571b-8b75-4810-b967-1fb1b241a7c2%2FGrid_3D_01.mp4?v=1604035722015" type="video/mp4" />
            </video>
            <Wrapper>
              {children}
            </Wrapper>
            <Footer></Footer>
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
