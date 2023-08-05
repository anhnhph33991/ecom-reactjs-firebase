import React from 'react'
import Helmet from "../components/Helmet/Helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/CommonSection";

const Policy = () => {
  return (
    <Helmet title='Policy'>
        <CommonSection title='Chính Sách'/>

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

export default Policy