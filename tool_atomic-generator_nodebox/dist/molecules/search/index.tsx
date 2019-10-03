import React, {ReactElement} from 'react'
import styled, { css } from "styled-components";

export interface SearchProps {
  id?: string;
}

const SearchStyled = styled.div<SearchProps>`
  color: gray;

  ${(props: any): any => props.id && css`
    border: 1px solid red;
  `}

`;


const Search = (props:SearchProps): ReactElement => {
  return (
    <SearchStyled>
      
      Id: {props.id}
      
    </SearchStyled>
  )
 };