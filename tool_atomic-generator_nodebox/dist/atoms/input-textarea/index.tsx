import React, {ReactElement} from 'react'
import styled, { css } from "styled-components";

export interface InputTextareaProps {
  id?: string;
}

const InputTextareaStyled = styled.div<InputTextareaProps>`
  color: gray;

  ${(props: any): any => props.id && css`
    border: 1px solid red;
  `}

`;


const InputTextarea = (props:InputTextareaProps): ReactElement => {
  return (
    <InputTextareaStyled>
      
      Id: {props.id}
      
    </InputTextareaStyled>
  )
 };