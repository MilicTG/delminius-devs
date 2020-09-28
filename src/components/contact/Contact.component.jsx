import React from "react";
import ContactImage from "../../assets/svgContact.svg";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import {
  ContactWrapper,
  ContactContainer,
  ContactFormsContainer,
  SubmitBtnWrapper,
  Image,
  TopLine,
  Form,
  Input,
  TextArea,
} from "./Contact.elements.js";

import Button from "../button/Button.component";

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactContainer>
        <ContactFormsContainer>
          <Fade left>
            <TopLine>Fell free to write us</TopLine>
            <Form>
              <Input type="name" name="name" placeholder="Name" />
              <Input type="text" name="email" placeholder="Email" />
              <TextArea
                type="text"
                name="subject"
                placeholder="Write something.."
              />
              <SubmitBtnWrapper>
                <Button type="submit">Submit</Button>
              </SubmitBtnWrapper>
            </Form>
          </Fade>
        </ContactFormsContainer>
        <Zoom>
          <Image src={ContactImage} />
        </Zoom>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
