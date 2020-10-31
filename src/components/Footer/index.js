import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

import StoreContext from '~/context/StoreContext'
import {
    Wrapper,
    Container,
    CartCounter, 
	MenuLink,
    NavTitle,
    Logo,
    Ul,
    Cartcontainer,
    Cartcontainer2,
    Line,
    CartLink,
    NavCart,
    windowsLogo,
} from './styles'

const useQuantity = () => {
    const {
        store: { checkout },
    } = useContext(StoreContext)
    const items = checkout ? checkout.lineItems : []
    const total = reduce(items, (acc, item) => acc + item.quantity, 0)
    return [total !== 0, total]
}

const Footer = ({}) => {
    const [hasItems, quantity] = useQuantity()

	return(
		<Wrapper>
			<Container>
                <div>
                <Cartcontainer>
                  <CartLink to='/'>
				      <CartCounter>
                        <p>Home</p>
				      </CartCounter>
                  </CartLink>
                </Cartcontainer>

            
     
                <Cartcontainer>
                  <CartLink to='/cart'>
				      <CartCounter>
                        <p>CART</p>
				      </CartCounter>
                  </CartLink>
                </Cartcontainer>
        
                <Cartcontainer2>
                  <CartLink to='/cart'>
				      <CartCounter>
                        <p>({quantity})</p>
				      </CartCounter>
                  </CartLink>
               </Cartcontainer2>
                </div>
			</Container>
		</Wrapper>
        
        
	)
}

export default Footer
