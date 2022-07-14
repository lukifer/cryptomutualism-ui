import * as React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import normalize from '../styles/normalize'
import main from '../styles/main'

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

interface LayoutRootProps {
  className?: string
  children: React.ReactNode
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
  <>
    <Global styles={() => css(normalize, main)} />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
)

export default LayoutRoot
