import styled from '@emotion/styled'
import { TextField } from '@mui/material'

export const StyledInput = styled(TextField)`
  min-width: 380px;

  @media screen and (min-width: 950px) {
    min-width: 600px;
  }
`
