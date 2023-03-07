import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { CustomInputFields } from "../components/customFields/CustomInputFields";
import { registerUser } from "../components/helper/axiosHelper";
import { MainLayout } from "../components/layout/MainLayout";

const Registration = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
    console.log(name, value)
  };

  const handeOnSubmit = async (e) => {
    e.preventDefault();
    const { confimPassword, ...rest } = form;
    if (confimPassword !== rest.password) {
      return window.alert("Password do not match");
    }
    const { status, message } = await registerUser(rest);
    toast[status](message);
    // console.log(form);
  };

  const inputFields = [
    {
      label: "User Name",
      name: "name",
      type: "text",
      required: true,
      placeholder: "john",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "john@email.com",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "*******",
    },
    {
      label: "Confirm Password",
      name: "confimPassword",
      type: "Password",
      required: true,
      placeholder: "******",
    },
  ];
  return (
    <MainLayout>
      <Container>
        <Row className="mt-4">
          <Col className=" bg-primary p-5 rounded d-flex justify-content-center align-items-center">
            <div className="text-light ">
              <h2 className="p-3">Welcome to our system</h2>
              <p>You can manage your financial with our system</p>
            </div>
          </Col>
          <Col>
            <Form onSubmit={handeOnSubmit}>
              <h2>Register</h2>
              <hr />
              {inputFields.map((item, i) => (
                <CustomInputFields
                  key={i}
                  {...item}
                  onChange={handleOnChange}
                />
              ))}

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Registration;
