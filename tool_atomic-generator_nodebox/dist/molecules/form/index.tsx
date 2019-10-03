import React, {ReactElement} from 'react'
import styled, { css } from "styled-components";

export interface FormProps {
  id?: string;
}

const FormStyled = styled.div<FormProps>`
  color: gray;

  ${(props: any): any => props.id && css`
    border: 1px solid red;
  `}

`;


const Form = (props:FormProps): ReactElement => {
  return (
    <FormStyled>
      
      Id: {props.id}
      
    </FormStyled>
  )
 };