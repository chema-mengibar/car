import React, {ReactElement} from 'react'
import styled, { css } from "styled-components";

export interface ButtonProps {
  id?: string;
}

const ButtonStyled = styled.div<ButtonProps>`
  color: gray;

  ${(props: any): any => props.id && css`
    border: 1px solid red;
  `}

`;


const Button = (props:ButtonProps): ReactElement => {
  return (
    <ButtonStyled>
      
      Id: {props.id}
      
    </ButtonStyled>
  )
 };