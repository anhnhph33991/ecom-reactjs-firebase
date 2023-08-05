
import React from 'react'
import Helmet from "../components/Helmet/Helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/CommonSection";

const Contact = () => {
  return (
    <Helmet title='Contact'>
        <CommonSection title='Liên Hệ'/>

        <section>
          <Container>
            <Row>
              <Col lg='12'>
                
              </Col>
            </Row>
          </Container>
        </section>
    </Helmet>
  )
}

export default Contact