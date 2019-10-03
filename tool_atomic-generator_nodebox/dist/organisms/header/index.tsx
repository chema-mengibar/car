import React, {ReactElement} from 'react'
import styled, { css } from "styled-components";

export interface HeaderProps {
  id?: string;
}

const HeaderStyled = styled.div<HeaderProps>`
  color: gray;

  ${(props: any): any => props.id && css`
    border: 1px solid red;
  `}

`;


const Header = (props:HeaderProps): ReactElement => {
  return (
    <HeaderStyled>
      
      Id: {props.id}
      
    </HeaderStyled>
  )
 };