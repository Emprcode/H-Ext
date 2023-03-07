import React, { useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CustomInputFields } from "../components/customFields/CustomInputFields";
import { loginUser } from "../components/helper/axiosHelper";
import { MainLayout } from "../components/layout/MainLayout";

const Login = () => {
  // const emailRef = useRef("")
  // const passwordRef = useRef("")
  const navigate = useNavigate()
  const [form, setForm] = useState({});

  const inputFields = [
   
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "john@email.com",
      // forwardref: emailRef
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "*******",
      // forwardref: passwordRef
    },

  ];


  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handeOnSubmit = async (e) => {
    e.preventDefault();
   
    // const loginObj = {
    //   email: emailRef.current.value,
    //   password: passwordRef.current.value
    // }
    const { status, message, result } = await loginUser(form);
    toast[status](message);
    if ( status === "success" && result?._id) {
      sessionStorage.setItem("user", JSON.stringify(result))
      navigate("/dashboard")
    }
    console.log(form)
  };

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
              <h2>Login</h2>
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

export default Login;
