import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const breakpoints = {
    s: 576,
    m: 768,
    l: 992,
    xl: 1200,
}

export const Wrapper = styled.div`
    color: white;
`

export const Container = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    padding: 1em;
`
