import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import Lookbook from '~/components/lookbook'


const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Lookbook />
  </>
)

export default IndexPage
