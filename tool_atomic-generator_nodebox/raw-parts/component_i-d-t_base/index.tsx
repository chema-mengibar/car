import React, {ReactElement} from 'react'
import styled, { css } from "styled-components";

export interface {__Name__}Props {
  id?: string;
}

const {__Name__}Styled = styled.div<{__Name__}Props>`
  // CSS here

  ${(props: any): any => props.id && css`
    // CSS here
  `}

`;


const {__Name__} = (props:{__Name__}Props): ReactElement => {
  return (
    <{__Name__}Styled>

      Id: {props.id}

    </{__Name__}Styled>
  )
 };
