import React from 'react'
import styled from 'emotion/react'
import { withTheme } from 'theming'
import { compose, withProps } from 'recompose'
import {
  space,
  width,
  fontSize,
  color
} from 'styled-system'
import {
  arrayOf,
  oneOfType,
  number,
  string
} from 'prop-types'
import tag from 'tag-hoc'
import styleProps from './style-props'

const prop = oneOfType([
  number,
  string,
  arrayOf(oneOfType([
    number,
    string
  ]))
])

const propTypes = {
  width: prop,
  w: prop,
  fontSize: prop,
  f: prop,
  color: prop,
  bg: prop,
  m: prop,
  mt: prop,
  mr: prop,
  mb: prop,
  ml: prop,
  mx: prop,
  my: prop,
  p: prop,
  pt: prop,
  pr: prop,
  pb: prop,
  pl: prop,
  px: prop,
  py: prop,
}

const withStyle = (style, props) => Component => {
  const Base = styled(Component)`
    ${space};
    ${width};
    ${fontSize};
    ${color};
  `
  Base.propTypes = propTypes

  // Clean this up after styled-components removes whitelisting
  const Comp = withProps(props)(styled(Base)`
  ${style};
`)

  return Comp
}

const Tag = tag(styleProps)

const hoc = (style, props) => compose(
  withTheme,
  withStyle(style, props),
  Tag
)

export default hoc
