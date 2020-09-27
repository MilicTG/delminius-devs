import React from "react";
import ContactImage from "../../assets/svgContact.svg";

import {
  ContactWrapper,
  ContactContainer,
  ContactFormsContainer,
  SubmitBtnWrapper,
  Image,
  Title,
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
          <Title>Fell free to write us</Title>
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
        </ContactFormsContainer>
        <Image src={ContactImage} />
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
