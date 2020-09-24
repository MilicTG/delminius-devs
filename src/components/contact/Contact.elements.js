import styled from "styled-components";
import {
  colorPrimary,
  colorSecondary,
  colorWhite,
  container,
  blackShadow,
  fontSize2s,
  fontSize0,
  above,
  below,
} from "../../styles";

export const ContactWrapper = styled.section`
  padding: 10rem 0;
`;
export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContactFormsContainer = styled.div``;

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

// Text

export const Title = styled.h1`
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;

export const Title2 = styled.h2`
  font-weight: 300;
  color: #4d4d4d;
  font-size: 1.8em;
`;

export const Text = styled.p`
  color: ${(props) => props.color || "#4d4d4d"};
`;
