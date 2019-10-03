import React, {ReactElement} from 'react'
import styled, { css } from "styled-components";

export interface InputTextProps {
  id?: string;
}

const InputTextStyled = styled.div<InputTextProps>`
  color: gray;

  ${(props: any): any => props.id && css`
    border: 1px solid red;
  `}

`;


const InputText = (props:InputTextProps): ReactElement => {
  return (
    <InputTextStyled>
      
      Id: {props.id}
      
    </InputTextStyled>
  )
 };