import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { addTrans, getTrans } from "../components/helper/axiosHelper";
import { MainLayout } from "../components/layout/MainLayout";
import { toast } from "react-toastify";
import { CustomTable } from "../components/customFields/CustomTable";

const DashBoard = () => {
  const [formData, setformData] = useState({});
  const [trans, setTrans] = useState([])
  useEffect(() => {
    fetchTrans()
  }, [])

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnAdd = async (e) => {
    e.preventDefault();
    const { status, message } = await addTrans(formData);
    toast[status](message);
  };

  const fetchTrans = async () => {
const {status, result } = await getTrans()
console.log(status, result)
status === "success"  && setTrans(result)
  }

  
  return (
    <MainLayout>
      {/* form */}
      <Container className="mt-5">
        <Form onSubmit={handleOnAdd}>
          <h3>Transaction Form</h3>
          <Row>
            <Col>
              <Form.Control
                placeholder="Name"
                onChange={handleOnChange}
                name="name"
                required
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Type"
                name="type"
                required

                onChange={handleOnChange}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Amount"
                name="amount"
                required
                onChange={handleOnChange}
              />
            </Col>
            <Col className="d-grid">
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>

      {/* table */}
      <Container className="table mt-5">
        <CustomTable trans={trans} />
      </Container>
    </MainLayout>
  );
};

export default DashBoard;
