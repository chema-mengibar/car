import React, {ReactElement} from 'react'
import styled, { css } from "styled-components";

export interface MenuProps {
  id?: string;
}

const MenuStyled = styled.div<MenuProps>`
  color: gray;

  ${(props: any): any => props.id && css`
    border: 1px solid red;
  `}

`;


const Menu = (props:MenuProps): ReactElement => {
  return (
    <MenuStyled>
      
      Id: {props.id}
      
    </MenuStyled>
  )
 };