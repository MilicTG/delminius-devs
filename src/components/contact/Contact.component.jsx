import React from "react";

import {
  ContactWrapper,
  ContactContainer,
  ContactFormsContainer,
  Title,
  Form,
  Input,
} from "./Contact.elements.js";

import Button from "../button/Button.component";

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactContainer>
        <ContactFormsContainer>
          <Title>Form</Title>
          <Form>
            <Input type="name" name="name" placeholder="Name" />
            <Input type="text" name="email" placeholder="Email" />
            <Button type="submit">Submit</Button>
          </Form>
        </ContactFormsContainer>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
