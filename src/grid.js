import styled from 'emotion/react'
import {
  Flex as _Flex,
  Box as _Box
} from 'grid-emotion'
import {
  fontSize,
  color
} from 'styled-system'

export const Flex = styled(_Flex)`
  composes: ${fontSize} ${color};
`
export const Box = styled(_Box)`
  composes: ${fontSize} ${color};
`
