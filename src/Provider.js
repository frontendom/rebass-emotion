import React from 'react'
import styled, { ThemeProvider } from 'emotion/react'
import {
  shape,
  arrayOf,
  oneOfType,
  array,
  object,
  string,
  number,
} from 'prop-types'
import theme from './theme'

const Base = styled.div`
  fontFamily: ${(props) => props.theme.font}
`

const Provider = props => (
  <ThemeProvider theme={Object.assign({}, theme, props.theme)}>
    <Base {...props} />
  </ThemeProvider>
)

Provider.propTypes = {
  theme: shape({
    breakpoints: arrayOf(number),
    space: arrayOf(number),
    fontSizes: arrayOf(number),
    weights: arrayOf(number),
    colors: oneOfType([
      object,
      array
    ]),
    font: string,
    monospace: string,
    radius: number
  })
}

export default Provider
