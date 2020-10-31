import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartPlus,
  faSearchPlus,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons'


import StoreContext from '~/context/StoreContext'
import {
	CartCounter, 
	Container,
	MenuLink,
	Wrapper,
    NavTitle,
    Logo,
    Ul,
    Cartcontainer,
    Line,
    CartLink,
    NavCart,
} from './styles'

const useQuantity = () => {
	const { store: {checkout} } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

	return(
		<Wrapper>
			<Container>
                
                
                <Cartcontainer>
                  <CartLink to='/cart'>
                 
				      <CartCounter>
                        <p style={{display: 'inlineBlock'}}>CART</p>
				      </CartCounter>
				    
                  </CartLink>
                  <CartLink to='/cart'>
                    
				      <CartCounter>
                        <p style={{display: 'inlineBlock'}}>({quantity})</p>
				      </CartCounter>
				   
                  </CartLink>
               </Cartcontainer>
			</Container>
		</Wrapper>
        
        
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
