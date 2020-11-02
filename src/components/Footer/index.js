import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

import StoreContext from '~/context/StoreContext'
import {
    Container,
    Cartcontainer,
    MenuLink,
    Cartcontainer1,
    Cartcontainer2
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

    return (
        <>
        <Container>
            <Cartcontainer>
                <MenuLink to="/" >HOME</MenuLink>
            </Cartcontainer>
            <Cartcontainer1>
                <MenuLink to="/cart" >CART</MenuLink>
            </Cartcontainer1>
            <Cartcontainer2>
                <MenuLink to="/cart" >({quantity})</MenuLink>
            </Cartcontainer2>
        </Container>
        </>
    )
}

export default Footer
