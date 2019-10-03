import React, {ReactElement} from 'react'
import styled, { css } from "styled-components";

export interface MenuItemProps {
  id?: string;
}

const MenuItemStyled = styled.div<MenuItemProps>`
  color: gray;

  ${(props: any): any => props.id && css`
    border: 1px solid red;
  `}

`;


const MenuItem = (props:MenuItemProps): ReactElement => {
  return (
    <MenuItemStyled>
      
      Id: {props.id}
      
    </MenuItemStyled>
  )
 };