import styled from "styled-components";
import {
  colorPrimary,
  colorFontPrimary,
  colorWhite,
  container,
  blackShadow,
  fontSize0,
  fontSize1x,
  fontSize1s,
  above,
  below,
} from "../../styles";

export const ContactWrapper = styled.section`
  padding: 10rem 0;
  ${above.large`
    padding: 15rem 0;
`}
`;
export const ContactContainer = styled.div`
  ${container}
  display: flex;
  justify-content: center;
  flex-flow: row;
  align-items: center;
  ${below.small`
    flex-flow: column;
  `}
`;
export const ContactFormsContainer = styled.div`
  width: 100%;
  max-width: 54rem;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Input = styled.input`
  width: 100%;
  height: 4.5rem;
  margin: 1rem 0;
  padding: 0 2rem;
  border-radius: 10px;
  font-size: ${fontSize0};
  color: "#4d4d4d";
  border: 1px solid #ccc;
  background-color: #fff;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 10rem;
  margin: 1rem 0;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: ${fontSize0};
  color: "#4d4d4d";
  border: 1px solid #ccc;
  background-color: #fff;
`;

export const Image = styled.img`
  padding-right: 0;
  border: 0;
  display: block;
  width: 90%;
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  ${below.small`
    padding-top: 3rem;
  `}
`;

export const SubmitBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 2rem;
`;

// Text

export const TopLine = styled.div`
  color: ${colorFontPrimary};
  font-size: ${fontSize0};
  line-height: 1.6rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 3.5rem;
`;

export const Text = styled.p`
  color: ${(props) => props.color || "#4d4d4d"};
`;
