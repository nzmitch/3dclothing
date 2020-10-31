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
    Cartcontainer1,
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

			<Container>
            
                <CartLink to='/'><Cartcontainer>
                  
				      <CartCounter>
                        <p>Home</p>
				      </CartCounter>
                  
                </Cartcontainer></CartLink>
                
                <CartLink to='/cart'><Cartcontainer>
                  
				      <CartCounter>
                        <p>CART ({quantity})</p>
				      </CartCounter>
        
                  </Cartcontainer></CartLink>
                
     
               
			</Container>

        
	)
}

export default Footer
